/// <reference types="cypress" />

const UserName = `Demo_${Date.now()}`;
const PassWord = "password123";

describe("creer un compte, puis se connecter avec le nouvel utilisateur", () => {
  it("creer le compte utilisateur", () => {
    cy.visit("/");
    cy.get("#signin2").click();
    cy.get("#sign-username").type(UserName, { force: true });
    cy.get("#sign-username")
      .invoke("prop", "value")
      .should("contain", UserName);
    cy.get("#sign-password").type(PassWord, { force: true });
    cy.get(".btn-primary")
      .contains("Sign up")
      .click();
    cy.on("window:alert", validerAvecSucces => {
      expect(validerAvecSucces).to.equal("Sign up successful.");
      cy.get("#sign-password")
        .invoke("prop", "value")
        .should("contain", PassWord);

      cy.get(".btn-primary").contains("Sign up");
    });
    cy.wait(10000);
  });
  it("Connection avec le compte creer", () => {
    cy.visit("/");
    cy.get("#login2").click();
    //cy.contains("Form Layouts").click();
    cy.get("#loginusername").type(UserName, { force: true });
    cy.get("#loginpassword").type(PassWord, { force: true });
    cy.get(".btn-primary")
      .contains("Log in")
      .click();

    cy.contains(`Welcome ${UserName}`).should("be.visible");
  });
});
