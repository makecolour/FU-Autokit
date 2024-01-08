const SemIndex = {
  Spring: 0,
  Summer: 1,
  Fall: 2,
};

const DefaultNonGPA = ["OJS", "VOV", "GDQP", "LAB", "ENT", "SSS", "ĐNH", "TMI"];

class Subject {
  semester;
  code;
  credit;
  grade;
  status;
  name;
  constructor(semester, code, name, credit, grade, status) {
    this.semester = semester;
    this.code = code;
    this.name = name;
    this.credit = +credit;
    this.grade = +grade;
    this.status = status;
  }

  includeInGPA() {
    for (let code of nonGPAList) {
      if (this.code.startsWith(code)) {
        return false;
      }
    }
    return this.credit != 0;
  }

  shortDesc() {
    return `Name: ${this.name}\nStatus: ${this.status}\nCredit: ${this.credit}\nGrade: ${this.grade}`;
  }

  pointLabel() {
    if (this.status == "Not passed") return "label-danger";
    if (this.includeInGPA()) {
      return "label-success";
    }
    return "label-default";
  }

  DOM() {
    const div = createHTML(`<div class="subject-block"/>`);
    div.append(
      createHTML(
        `<span
         class="code label ${this.pointLabel()}" title="${this.shortDesc()}">${this.code
        }</span>`
      )
    );

    if (this.includeInGPA())
      div.append(
        createHTML(
          `<span class="label point ${rankLabel(this.grade)}">${this.grade} x ${this.credit
          }</span>`
        )
      );
    return div;
  }
}

class Semester {
  semester;
  year;
  subjects = [];
  constructor(name) {
    if (name == "Not started") {
      this.semester = name;
      this.year = "";
    } else {
      this.semester = name.slice(0, -4);
      this.year = name.slice(-4);
    }
  }

  get Year() {
    return this.year;
  }
  get Gpa() {
    const avg = this.subjects.reduce(
      (avg, subj) => {
        if (subj.includeInGPA() && subj.status == "Passed")
          return {
            sum: avg.sum + subj.grade * subj.credit,
            total: avg.total + subj.credit,
          };
        return avg;
      },
      {
        sum: 0,
        total: 0,
      }
    );
    if (avg.total == 0) {
      return createHTML(`<span class="label label-default">No Data</span>`);
    }
    const gpa = round(avg.sum / avg.total);
    return createHTML(`<span class="label ${rankLabel(gpa)}">${gpa}</span>`);
  }

  get Semester() {
    switch (this.semester) {
      case "Summer":
        return createHTML(`<span class="label label-warning">Summer</span>`);
      case "Spring":
        return createHTML(`<span class="label label-success">Spring</span>`);
      case "Fall":
        return createHTML(`<span class="label label-info">Fall</span>`);
      default:
        return createHTML(
          `<span class="label label-default">${this.semester}</span>`
        );
    }
  }

  get Subjects() {
    const div = document.createElement("div");
    this.subjects.forEach((sub) => {
      div.append(sub.DOM());
    });
    return div;
  }
}

class GPATable {
  table = null;
  header = null;
  body = null;
  constructor() {
    this.table = createHTML(
      `<table id="gpa-table" class="table table-hover"/>`
    );
    this.header = this.table.createTHead();
    this.body = this.table.createTBody();
  }

  addHeader(...cells) {
    const row = this.header.insertRow();
    cells.forEach((e) => {
      row.insertCell().outerHTML = `<th>${e}</th>`;
    });
  }

  addRow(...cells) {
    const row = this.body.insertRow();
    cells.forEach((e) => {
      row.insertCell().append(e);
    });
  }

  DOM() {
    return this.table;
  }
}
const extractText = (node) => {
  if (node.childElementCount == 0) {
    return node.innerHTML;
  }
  return extractText(node.childNodes[0]);
};

const createHTML = (content) => {
  const template = document.createElement("template");
  template.innerHTML = content.trim();
  return template.content.firstChild;
};

const createElement = (root, ...elems) => {
  const div = document.createElement(root);
  elems.forEach((e) => {
    div.append(e);
  });
  return div;
};

const rankLabel = (grade) => {
  if (grade >= 9) return "label-warning";
  if (grade >= 8) return "label-primary";
  if (grade >= 5) return "label-info";
  return "label-danger";
};

const round = (num) => Math.round(num * 100) / 100;
"use strict";

const NonGPAKey = "NonGPAKey";

//ID
const MainContentID = "ctl00_mainContent_divGrade";
const HeaderID = "ctl00_mainContent_lblRollNumber";
const GridID = "ctl00_mainContent_divGrade";

//DOM
const gradeTablesDOM = document
  .getElementById(MainContentID)
  .querySelectorAll("table");
const headerDOM = document.getElementById(HeaderID);
const gridDom = document.getElementById(GridID);

//Logic
const mapSemester = {};

const showButtonDOM = () => {
  const dom = createHTML(
    `<button class="label label-success" id="gpa-btn" type="button">Show GPA</button>`
  );

  return dom;
};

const renderShowButton = (headerDOM) => {
  headerDOM.append(" - ", showButtonDOM());
};

const parseGrade = (doms) => {
  return [...doms.querySelectorAll("tbody>tr")].map((tr) => {
    let tds = tr.querySelectorAll("td");
    return new Subject(...[2, 3, 6, 7, 8, 9].map((e) => extractText(tds[e])));
  });
};

let nonGPAList = [];

const getNonGPAList = () => {
  return new Promise((res, rej) => {
    chrome.storage.sync.get([NonGPAKey], (list) => {
      list = list[NonGPAKey];
      if (!Array.isArray(list)) {
        list = DefaultNonGPA;
        setNonGPAList(list);
      }
      console.log("GET NON_GPA", list);
      nonGPAList = list;
      res(nonGPAList);
    });
  });
};

const setNonGPAList = async (list) => {
  await chrome.storage.sync.set({ NonGPAKey: list }, function () {
    console.log("SET NON_GPA", list);
    location.reload();
  });
};

const renderNonGPAEditor = () => {
  const root = createHTML(`<div class="table-responsive"/>`);
  const table = createHTML(`<table class="table" />`);
  root.append(table);
  const thead = table.createTHead();
  // List non gpa subject
  const listSubjRow = thead.insertRow();
  const listSubjCell = createHTML('<td class="w-50"/>');

  const renderList = () => {
    listSubjCell.innerHTML = "";
    nonGPAList.forEach((subj) => {
      const removeBtn = createHTML(
        `<a href="#" class="non-gpa non-gpa-delete label label-danger">x</a>`
      );
      removeBtn.onclick = async () => {
        nonGPAList = nonGPAList.filter((e) => e != subj);
        renderList();
      };
      const block = createHTML(`<div class="inline-block"/>`);
      block.append(
        createHTML(`<span class="non-gpa label label-primary">${subj}</span>`),
        removeBtn
      );
      listSubjCell.append(block);
    });
  };
  renderList();

  // Submit / reset default
  const submitCell = createHTML(`<th rowspan="2" class="w-25"//>`);

  const defaultBtn = createHTML(
    `<span class="btn btn-warning w-100">Mặc định</span>`
  );
  defaultBtn.onclick = () => {
    nonGPAList = DefaultNonGPA;
    setNonGPAList(nonGPAList);
    renderList();
  };

  const saveBtn = createHTML(`<span class="btn btn-primary w-100">Lưu</span>`);
  saveBtn.onclick = () => {
    setNonGPAList(nonGPAList);
  };

  submitCell.append(
    defaultBtn,
    createHTML(`<div class="spacing-h"/>`),
    saveBtn
  );

  listSubjRow.append(
    createHTML('<th class="w-25"><b>Các môn không tính vào GPA: </b></th>'),
    listSubjCell,
    submitCell
  );
  // Input new subject
  const addSubjRow = thead.insertRow();

  addSubjRow.insertCell().outerHTML = "<th>Thêm môn vào danh sách:</th>";

  const addSubjCell = createHTML(`<div class="input-group"></div>`);
  const input = createHTML(
    `<input class="form-control" placeholder="Nhập mã môn ( không cần số )"/>`
  );
  const submitBtn = createHTML(
    `<div class="input-group-btn"><span class="btn btn-success">Thêm vào danh sách</span></div>`
  );
  submitBtn.onclick = () => {
    const subject = input.value;
    if (!subject) return;
    console.log(subject);
    nonGPAList.push(subject);
    renderList();
    input.value = "";
  };

  addSubjCell.append(input, submitBtn);
  addSubjRow.insertCell().append(addSubjCell);

  return root;
};

const main = async () => {
  await getNonGPAList();
  const mainGrade = parseGrade(gradeTablesDOM[0]);
  mainGrade.forEach((subj) => {
    if (!subj.semester) subj.semester = subj.status;
    if (!mapSemester[subj.semester]) {
      mapSemester[subj.semester] = new Semester(subj.semester);
    }
    mapSemester[subj.semester].subjects.push(subj);
  });
  const report = Object.values(mapSemester).sort((a, b) => {
    if (a.year != b.year) return a.year - b.year;
    return SemIndex[a.semester] - SemIndex[b.semester];
  });

  const table = new GPATable();
  table.addHeader("YEAR", "SEMESTER", "SUBJECTS", "GPA");
  report.forEach((sem) => {
    table.addRow(sem.Year, sem.Semester, sem.Subjects, sem.Gpa);
  });
  let gpa = mainGrade.reduce(
    (avg, sub) => {
      if (sub.includeInGPA() && sub.status == "Passed")
        return {
          sum: avg.sum + sub.grade * sub.credit,
          total: avg.total + sub.credit,
        };
      return avg;
    },
    {
      sum: 0,
      total: 0,
    }
  );
  gpa = gpa.sum / gpa.total;
  table.addRow(
    "",
    "",
    createHTML("<h4><b>Total avg</b></h4>"),
    createHTML(
      `<h4 style="text-align:start"><span class="label ${rankLabel(
        gpa
      )}">${gpa}</span></h4>`
    )
  );

  const container = createHTML(`<div id="gpa-panel">`);
  const showBtnDOM = showButtonDOM();

  console.log(container.style.maxHeight);
  showBtnDOM.onclick = () => {
    console.log(container.style.maxHeight);
    if (container.style.maxHeight != "0px") {
      container.style.maxHeight = "0px";
    } else {
      container.style.maxHeight = container.scrollHeight + "px";
    }
  };

  headerDOM.append(" - ", showBtnDOM);
  container.append(renderNonGPAEditor(), table.DOM());
  gridDom.prepend(container);
  container.style.maxHeight = container.scrollHeight + "px";
};

main();
