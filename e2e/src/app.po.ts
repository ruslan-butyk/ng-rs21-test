import { browser, by, element } from 'protractor';
import {WebElementPromise} from 'selenium-webdriver';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getMapElement(): WebElementPromise {
    return element(by.css('#map')).getWebElement();
  }
}
