var chars = {
  up : [
    '̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̊',
    '͂', '̓', '̈́', '͊', '͋', '͌', '̃', '̂', '̌', '͐', '̀', '́', '̋', '̏',
    '̒', '̓', '̔', '̽', '̉', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ',
    'ͬ', 'ͭ', 'ͮ', 'ͯ', '̾', '͛', '͆', '̚'
  ],
  middle : [
    '̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '͏', '͜',
    '͝', '͞', '͟', '͠', '͢', '̸', '̷', '͡', '҉'
  ],
  down : [
    '̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪',
    '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ',
    '͇', '͈', '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣'
  ]
}

chars.all = [].concat(chars.up, chars.middle, chars.down)
chars.pattern = RegExp('(' + chars.all.join('|') + ')', 'g')

module.exports = chars
