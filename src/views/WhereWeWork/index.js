import React, { Component } from "react";
import logo from "./sharpened_nza_logo.jpg";
import lawOffice from "./Law_office.jpg";
import Page from "../../components/Page";

export default class WhereWeWork extends Component {
  render() {
    return (
      <Page>
        <div className="wherewework-content">
          <main className="wherewework-first-container">
            <div className="container">
              <div className="row">
                <div className="col-md-3 law-office">
                  <img
                    src={lawOffice}
                    alt="Law_office"
                    width="100%"
                    height="200px"
                  />
                </div>
                <div className="col-md-9">
                  <div className="text">
                    <div ClassName="white-background">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>

                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col" />
                            <th scope="col">United States</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">International</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"></th>
                            <td className="firstTableCell">State</td>
                            <td>State</td>
                            <td>State</td>
                            <td>Canada</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>
                            <td>Columbia</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>
                            <td>Germany</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>
                            <td>Nicaragua</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>State</td>
                            <td>State</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>State</td>
                            <td>State</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>State</td>
                            <td>State</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>State</td>
                            <td>State</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>State</td>
                            <td>State</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>State</td>
                            <td>State</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <hr />
      </Page>
    );
  }
}
