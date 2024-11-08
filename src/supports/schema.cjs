const usersSchema = {
  name: '',
  registered: false,
  registeredTime: '',
  umur: '',
  seri: '',
  premium: false,
  premiumTime: '',
  banned: false,
  bannedReason: '',
  limit: 20,
  kupon: 5,
  uang: 1000,
  hitCmd: 0,
  notes: '',
  lastClaim: '',
  lastHour: '',
  lastUang: '',
  lastKupon: '',
  afkTime: -1,
  afkReason: ''
};

const chatsSchema = {
  name: '',
  welcome: true,
  antilink: true,
  mute: false,
  viewOnce: true,
  antiToxic: true,
  description: '',
  welcomeCaption: '',
  byeCaption: ''
};

module.exports = {
  usersSchema,
  chatsSchema
};