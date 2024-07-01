const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.",
  },
  {
    id: 4,
    emoji: "😇️",
    name: "Smiling Face With Halo",
    meaning:
      "A heavenly smile is shown by the 😇 halo emoji, which symbolizes innocence and goodness. People use it to express their good deeds, loving behavior or exemplary attitude. Sometimes this emoji is used humorously to show a winking innocence for less good deeds or behaviors. It conveys kindness and goodwill and adds a playful touch to communication. You can use it to add charm and lightness to your messages or to round out a humorous comment.",
  },
  {
    id: 5,
    emoji: "🙂️",
    name: "Slightly Smiling Face",
    meaning:
      "This slightly smiling emoji expresses a pleasant contentment and inner peace. It is used to make a statement seem friendlier, even if it is not necessarily meant that way. In some cases, a slight smile can even have a sarcastic undertone, especially when a smile seems inappropriate for the situation. In such situations, it can be used in a humorous way to suggest a wink or an ironic remark. It is ideal for adding a soft, positive touch to text messages or to make the recipient smile.",
  },
  {
    id: 6,
    emoji: "🙃️",
    name: "Upside-Down Face",
    meaning:
      "I'm not serious! The inverted smiling face 🙃 indicates that you are not serious or have a humorous undertone. It is suitable for ambiguous statements, ironic remarks or joking comments. Also, it can be used to express silliness or in response to a joke. In conversations, it emphasizes the playful nature of a message and helps clarify potential misunderstandings about the tone of the message. Additionally, the emoji emphasizes lightness and cheerfulness, even when the topic is serious. Finally, it is a creative way to create a relaxed atmosphere in text messages.",
  },
  {
    id: 7,
    emoji: "😉️",
    name: "Winking Face",
    meaning:
      "A winking 😉 emoji indicates someone is being mischievous or humorous. It shows that someone is joking, flirting, or has a hidden agenda. This emoji is a friendly way to defuse a message and indicate that it should be taken with a grain of salt. It can also be used to share confidential or playful information and create a pleasant atmosphere. In some contexts, the wink even has a teasing or flirtatious meaning, which is especially appealing in romantic or friendly conversations. It also helps break the ice and keep a conversation going.",
  },
  {
    id: 8,
    emoji: "😌️",
    name: "Relieved Face",
    meaning:
      "Everything went well! The relieved face 😌 radiates a calming atmosphere. It is a gentle smile that signals that an unpleasant situation has been successfully handled. Worries and fears can now be put aside as the person feels relaxed and resolved. This emoji can be used to express gratitude or relief when a difficult situation has turned out well. It also conveys a sense of satisfaction and letting go of stress or tension, which creates a pleasant mood.",
  },
  {
    id: 9,
    emoji: "😍️",
    name: "Smiling Face With Heart-Eyes",
    meaning:
      "A smile of love is shown by the 😍 emoji, which beams with happiness with its heart-shaped eyes. It conveys intense love and affection for a person, place or even an object. This emoji is often used in romantic messages to express love, gratitude, and admiration. It can also be used to convey enthusiasm for a cause or event. The heart-shaped eyes symbolize overwhelming feelings of happiness and a strong connection.",
  },
  {
    id: 10,
    emoji: "🥰️",
    name: "Smiling face with smiling eyes and three hearts",
    meaning:
      "This adorable 🥰 emoji represents a smiling face surrounded by hearts, embodying infatuation and romance. It's perfect for expressing affection, love and romantic affairs of the heart while floating on cloud nine. Deep connection and loving feelings can be conveyed to the person you are talking to through this emoji. It can also be used to express appreciation for special moments or heartfelt gestures. All in all, this emoji is a wonderful way to express your love and affection in digital communication.",
  },
  {
    id: 11,
    emoji: "😘️",
    name: "Face Throwing a Kiss",
    meaning:
      "The kiss emoji 😘 is an expression of affection. It conveys friendly or romantic sympathy and is often used to express tenderness or as a flirtatious signal. The kissing emoji can also be used to express gratitude or to soften a sarcastic response. It is also an appropriate response to rude messages to lighten the situation. This emoji is a charming way to share feelings and emotions, and convey closeness and connection even when you are physically separated. Use it to give your loved ones a little smile and show them you care.",
  },
  {
    id: 12,
    emoji: "😗️",
    name: " Kissing Face",
    meaning:
      "A neutral kiss face 😗 emoji that represents an affectionate gesture toward friends or family members. It is used as a friendly expression to say “thank you“, “hello“, or “goodbye“. The open eyes and neutral expression signal that this is not an intimate kiss, but a warm, general gesture. In addition, this emoji can also represent the expression of a whistle or a “duck face,“ which is often used when taking pictures. In some contexts, it has a playful or ironic meaning. Use it to send kisses in a friendly way or to emphasize humorous situations.",
  },
  {
    id: 13,
    emoji: "😙️",
    name: "Kissing Face With Smiling Eyes",
    meaning:
      "With smiling eyes and kissing lips, the 😙 emoji radiates a relaxed and happy mood. It symbolizes a loving gesture and is ideal for sending a kiss to friends or family, such as “We hug and kiss you“. The emoji conveys a harmonious atmosphere and can be used in humorous or playful contexts. For example, it can be used to represent whistling in a situation where you are pretending to be relaxed. It is versatile and adds a friendly and warm character to your messages. With this emoji, you'll bring positive energy to your conversation and express your affection.",
  },
  {
    id: 14,
    emoji: "😚️",
    name: " Kissing Face With Closed Eyes",
    meaning:
      "With closed eyes and rosy cheeks, the 😚 emoji conveys affection and warmth. Red cheeks are an important feature because they can express shyness, emotion, or embarrassment. In many cultures, red cheeks are a sign of affection or emotional warmth. Often the 😚 emoji is used to express gratitude or appreciation for advice or a favor, but also to send affectionate kisses to close friends, family members, or a secret crush. The combination of closed eyes and rosy cheeks gives this emoji a special tenderness, making it ideal for situations where you want to show your feelings in a charming and heartfelt way.",
  },
  {
    id: 15,
    emoji: "😋️",
    name: "Face Savouring Delicious Food",
    meaning:
      "Bon appetit! Licking your lips with pleasure, the 😋 emoji shows an expression of satisfaction, hunger or joy over delicious food. It is shown beaming with joy when you have cooked something particularly tasty or when your plate is empty. It is also often used in conjunction with a humorous message or when joking, as it shows a playful grimace with the tongue sticking out. Similarly, when flirting, it is used for a thoughtful and ambiguous digression. The 😋 emoji is perfect for expressing culinary enthusiasm and enjoyment of food, or simply to convey a fun and relaxed mood..",
  },
];

export default emojipedia;
