declare module '@emailjs/browser' {
    export interface EmailJSResponseStatus {
      status: number;
      text: string;
    }
  
    export function send(
      serviceId: string,
      templateId: string,
      templateParams: object,
      publicKey: string
    ): Promise<EmailJSResponseStatus>;
  
    export function sendForm(
      serviceId: string,
      templateId: string,
      form: HTMLFormElement,
      publicKey: string
    ): Promise<EmailJSResponseStatus>;
  }
  