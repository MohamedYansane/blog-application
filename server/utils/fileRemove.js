import fs from "fs"; //(file system) it's a prebuild package on node js
import path from "path";
/**
 *
 * @param {*} filename
 * in fs.unlink we passing the path and a callback function
 * the problem when i delete a user or remove user picture the user
 * picture still remains in my upload to resolve that:
 * i passed to the fs.unlink the filename though
 *
 */
export const fileRemove = (filename) => {
  fs.unlink(path.join(__dirname, "../uploads", filename), (error) => {
    if (error && error.code === "ENOENT") {
      //enoent files does not exist
      console.log(`File ${filename} does not exist, we cannot remove it`);
    } else if (error) {
      console.log(`Error occured while trying to remove ${filename}`);
    } else {
      console.log(`File ${filename} removed successfully `);
    }
  });
};
