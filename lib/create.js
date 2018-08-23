const inquirer = require('inquirer');
const download = require('download-git-repo')
const path = require('path')
const ora = require('ora');
function create(packagename) {
    const spinner = ora('clone from https://github.com/duyanpeng/vue-quick-template.git').start();
    var url = packagename ? packagename : process.cwd();
    download('direct:https://github.com/duyanpeng/vue-quick-template.git', url, { clone: true }, function (err) {
        if(err){
            console.log(err)
        }
        
        spinner.stop()
    })
}

module.exports = create