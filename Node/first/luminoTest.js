let func = (s, a, b) => {
  let match_empty = /^$/
  let result = s.match(match_empty) ? -1 :
    i = s.length - 1
  aIndex = -1
  bIndex = -1
  while ((aIndex == bIndex == -1) && (i >= 0)) {
    s.substring(i, i + 1) == a ? aIndex = i: 
      s.substring(i, i+1) ==b ? bIndex =i: i--
  }
  if (!(aIndex == -1))
}