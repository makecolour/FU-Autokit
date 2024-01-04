/**
 * Sets a value to storage with the given key.
 * @param {string} key - The key to set the value.
 * @param {*} value - The value to be set.
 */
const setToStorage = (key, value) => {
  // Use chrome.storage.sync to set the key-value pair to storage
  chrome.storage.sync.set({ [key]: value });
};

/**
 * Retrieves a value from the Chrome storage sync API using the provided key.
 * @param {string} key - The key used to retrieve the value from storage.
 * @returns {Promise<any>} - A promise that resolves with the retrieved value.
 */
const getFromStorage = (key) => {
  return new Promise((resolve) => {
    // Use the chrome.storage.sync.get method to retrieve the value associated with the provided key
    chrome.storage.sync.get([key], (result) => {
      // Resolve the promise with the retrieved value
      resolve(result[key]);
    });
  });
};
