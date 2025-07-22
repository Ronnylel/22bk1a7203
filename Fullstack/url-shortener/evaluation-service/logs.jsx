const fs=require('fs');
function Log (stack,level,pkg,message) {
    const data=`${stack} throws ${level} warning in ${pkg} package with message ${message}`;
    const jsonData=JSON.stringify(data,null,2);
    fs.writeFile('logrecords.json',jsonData);
    }

export default Log