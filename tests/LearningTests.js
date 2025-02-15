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
const sliderHandle = Selector('.ui-slider-handle');
const sliderTick = Selector('.slider-value');
const preferredInterface = Selector('#preferred-interface');
const pInterfaceOption = preferredInterface.find('option');



fixture`Learning Test`
  .page`https://devexpress.github.io/testcafe/example/`;

//Tests
test('Find and type text in input fields', async t => { 
  await t
    .typeText(nameInput, 'Kal')
    .expect(nameInput.value).eql('Kal')
    .typeText(nameInput, 'Karl', { replace: true })
    .expect(nameInput.value).eql('Karl');    
})

test('Input Preffered OS', async t => {
  await t
    .typeText(nameInput, 'Charles')
    .click(windowsRadioButton)
    .click(triedTestCafeCheckbox);
})

test('Moving slider', async t => {
  const initialOffset = await sliderHandle.offsetLeft;

  await t
    .click(triedTestCafeCheckbox)
    .dragToElement(sliderHandle, sliderTick.withText('7'))
    .expect(sliderHandle.offsetLeft).gt(initialOffset);
})

test('Type comments', async t => {
  await t
    .click(triedTestCafeCheckbox)
    .typeText(commentsTextArea, 'Selectors are great')
    .wait(500)
    .expect(commentsTextArea.value).eql('Selectors are great')
})

test('All features', async t => {
  const initialOffset = await sliderHandle.offsetLeft;

  await t
    .typeText(nameInput, 'Charles')
    .click(windowsRadioButton)
    .click(triedTestCafeCheckbox)
    .dragToElement(sliderHandle, sliderTick.withText('7'))
    .typeText(commentsTextArea, 'Selectors are great')
    .wait(500)
    .expect(commentsTextArea.value).eql('Selectors are great')
    .expect(sliderHandle.offsetLeft).gt(initialOffset)
    .expect(nameInput.value).eql('Charles');
})