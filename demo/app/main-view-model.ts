import { Observable } from 'tns-core-modules/data/observable';
import { AzureAuth } from 'nativescript-azure-auth';

export class HelloWorldModel extends Observable {
  public message: string;
  private azureAuth: AzureAuth;

  constructor() {
    super();

    this.azureAuth = new AzureAuth();
    this.message = this.azureAuth.message;
  }
}
