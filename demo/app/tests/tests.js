var AzureAuth = require("nativescript-azure-auth").AzureAuth;
var azureAuth = new AzureAuth();

describe("greet function", function() {
    it("exists", function() {
        expect(azureAuth.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(azureAuth.greet()).toEqual("Hello, NS");
    });
});