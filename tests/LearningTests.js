import { fixture, Selector } from "testcafe";

const nameInput = Selector('#developer-name');
const triedTestCafeCheckbox = Selector('#tried-test-cafe');
const populateButton = Selector('#populate');
const submitButton = Selector('#submit-button');
const results = Selector('.result-content');
const macOSRadioButton = Selector('input[type=radio][value=MacOS]');
const windowsRadioButton = Selector('input[type=radio][value=Windows]');
const linuxRadioButton = Selector('input[type=radio][value=Linux]');
const commentsTextArea = Selector('#comments');


fixture`Learning Test`
  .page`https://devexpress.github.io/testcafe/example/`;

//Tests
test('Find and type text in input fields', async t => { 
  await t
    
})