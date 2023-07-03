import fs from 'fs'; //(file system) it's a prebuild package on node js
import path from 'path';
/**
 * 
 * @param {*} filename 
 * in fs.unlink we passing the path and a callback function
 */
export const fileRemove = (filename) =>{
    fs.unlink(path.join(__dirname, "../uploads"),(error) =>{
        if(error && error.code === 'ENOENT')
        {
            //enoent files does not exist
            console.log(`File ${filename} does not exist, we cannot remove it`)
        }else if (error){
            console.log(`Error occured while trying to remove ${filename}` );
        }else{
            console.log(`File ${filename} removed successfully `);
        }
    })
}