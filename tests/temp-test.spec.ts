import { test } from '../fixtures/pom-fixture';


test("Temp test", async ({ page, loginPage }) => {
    // 
    

// console.log(process.env.BASE_URL);
// console.log(process.env.USER_NAME);
// console.log(process.env.PASSWORD);

// // await loginPage.gotoOrangeHrm();
// // await loginPage.loginOrangeHrm('Admin', 'admin123');

// const commonUtilsObj = new CommonUtils();
// commonUtilsObj.encryptData('Admin');

// console.log('Encrypted username:', commonUtils.encryptData('Admin'));
// console.log('Encrypted password:', commonUtils.encryptData('admin123'));

await loginPage.gotoOrangeHrm();

});