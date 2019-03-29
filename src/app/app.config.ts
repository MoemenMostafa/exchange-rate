export class AppConfig {
    // serverURL = 'http://localhost:3000';
    // serverURL = 'https://apt-uqudo.herokuapp.com';
    serverURL = 'https://apt.dev.uqudo.io';
    apiEndPoint = '/api';
    oneSignal = {
      appId: "361495ca-1aed-4818-966c-fe71b4a858e2",
      googleProjectNumber: "867355489073"
    };
    ms = {
        captcha: {
          base:'/v1/captcha'
        },
        enroll:{
          base:'/v1/enroll',
          urls:{
            confirm: '/confirm',
            otp: '/otp'
          }
        },
        oauth: {
            base:'/oauth/token'
        },
        transactions: {
          base:'/v1/transactions',
          urls:{
            custody: '/custody',
            purchase: '/purchase'
          }
        },
        wallet:{
            base:'/v1/wallet',
            urls:{
              utxo:'/utxo',
              txcount:'/txcount',
              custodyAddress: '/custody/address',
              purchaseAddress: '/purchase/address',
              balance: '/balance',
              accounts: '/accounts',
              suggestedFee: '/suggestedFee'
            }
        },
        custody:{
            base:'/v1/custody',
            urls:{
              payback:'/payback',
              history:'/history'
            }
        },
        users:{
          base:'/v1/users',
          urls: {
            profile: '/profile',
            mail: '/profile/mail',
            confirm: '/profile/mail/confirm',
            otp: '/profile/otp'
          }
        }
    };
    keyStore = {
      credentials: {
        key: 'credentials',
        login: "Login to APT",
        unauthorized: "Session timed out please login again"
      },
      account: {
        message: "Please use fingerprint to access your private key"
      }
    };
    errorMsg = {
      INSUFFICIENT_BALANCE: "Insufficient Balance",
      UNAUTHORIZED: "Unauthorized or Session timed out",
      INVALID_CAPTCHA: "Invalid Captcha",
      INVALID_ADDRESS: "Invalid Address",
      INVALID_ADDRESS_TO: "Invalid Address to",
      INVALID_OTP_CODE: "Invalid OTP code",
      INVALID_TRANSACTION: "Invalid Transaction",
      INVALID_PRIVATE_KEY: "Invalid Private Key",
      ZERO_AMOUNT: "Zero Amount",
    }
}
