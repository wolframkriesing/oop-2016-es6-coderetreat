let customersOnline = ['Heribert', 'Friedlinde', 'Tusnelda', 'Oswine', 'Ladislaus (Admin)'];

let isAdmin = (name) => name.indexOf('(Admin)') !== -1;

let compareChatParticipants = (a, b) => {

  if (isAdmin(a)) {return -1}
  if (isAdmin(b)) {return 1}

  return a > b;
}

console.log(customersOnline.sort(compareChatParticipants).join('\n'));