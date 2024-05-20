const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

async function createDriver() {
  const service = new chrome.ServiceBuilder(require('chromedriver').path).build();
  chrome.setDefaultService(service);

  let driver = await new Builder().forBrowser('chrome').build();
  return driver;
}

describe('Google Home Page Tests', () => {
  let driver;

  beforeAll(async () => {
    driver = await createDriver();
    await driver.get('https://www.google.com');
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('Title should be Google', async () => {
    const title = await driver.getTitle();
    expect(title).toBe('Google');
  });

  test('Logo should be displayed', async () => {
    const logo = await driver.findElement(By.id('hplogo'));
    const isDisplayed = await logo.isDisplayed();
    expect(isDisplayed).toBe(true);
  });

  test('Search box should be displayed', async () => {
    const searchBox = await driver.findElement(By.name('q'));
    const isDisplayed = await searchBox.isDisplayed();
    expect(isDisplayed).toBe(true);
  });

  test('Search button should be displayed', async () => {
    const searchButton = await driver.findElement(By.name('btnK'));
    const isDisplayed = await searchButton.isDisplayed();
    expect(isDisplayed).toBe(true);
  });

  test('Gmail link should be displayed', async () => {
    const gmailLink = await driver.findElement(By.linkText('Gmail'));
    const isDisplayed = await gmailLink.isDisplayed();
    expect(isDisplayed).toBe(true);
  });

  test('This test will fail', async () => {
    const fakeElement = await driver.findElement(By.id('fakeId'));
    const isDisplayed = await fakeElement.isDisplayed();
    expect(isDisplayed).toBe(true);
  });

  test('This test will also fail', async () => {
    await driver.wait(until.titleIs('Non-Existent Title'), 1000);
  });
});
