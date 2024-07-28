 export const genId =(length = 40, includeSpecialChars = true, includeNumbers = true)=>{

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!_@#$%?&';
    let chars = letters;



    if (includeNumbers) chars += numbers;
    if (includeSpecialChars) chars += specialChars;

    let newId = '';

    for (let i = 0; i < length; i++) {
      newId += chars[Math.floor(Math.random() * chars.length)];
    }
    return newId;
  }
  
