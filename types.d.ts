import sgMail from '@sendgrid/mail'

declare module 'h3' {
  interface H3EventContext {
    sg: typeof sgMail
  }
}
