let anagramChecker = function (string1, string2) {
  let passesChecks = string1.length == string2.length 

  if (passesChecks) {
  
    let explode1 = explodeString(string1)
    let explode2 = explodeString(string2)

    let AllKeys1 = Object.keys(explode1)
    let AllKeys2 = Object.keys(explode2)

    let AllKeys = new Set(AllKeys1.concat(AllKeys2))

    for (let i = 0; i < AllKeys.length; i++) {
      if (!(AllKeys1.includes(AllKeys[i]) && AllKeys2.includes(AllKeys[i]))) {
        passesChecks = false
        break
      }
    }

    AllKeys.forEach(key => {
      if (!(explode1[key] == explode2[key])) passesChecks = false
    })

  }

  console.log(passesChecks ? `${string1} is a anagram of ${string2}` : `${string1} is not a anagram of ${string2}`)
  return passesChecks
}

function explodeString (stringValue) {
  stringValue = stringValue.toLowerCase()

  let letterStore = {}

  for (let i = 0; i < stringValue.length; i++) {

    if (letterStore.hasOwnProperty(stringValue.charAt(i))) {
      letterStore[stringValue.charAt(i)]++
    } else {
      letterStore[stringValue.charAt(i)] = 1
    }

  }  

  return letterStore
}

anagramChecker('bob', 'obbo')
anagramChecker('bob', 'obo')
anagramChecker('bob', 'obb')
anagramChecker('bob', 'BOB')