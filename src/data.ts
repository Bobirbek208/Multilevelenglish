import { ExamData } from './types';

export const EXAM_DATA: ExamData = {
  listening: [
    {
      id: 1,
      title: "Part 1 (Questions 1-8)",
      instruction: "Choose the correct answer A, B or C.",
      audioUrl: "https://image2url.com/r2/default/audio/1772862706544-a93e6727-9caf-49d5-a3c2-b2ed2f07cfb0.mp3",
      questions: [
        { id: 1, type: 'multiple-choice', text: "", options: ["A.What did she study? ", "B.Where does she come? ", "C.Where has she gone? "], correctAnswer: "C" },
        { id: 2, type: 'multiple-choice', text: "", options: ["A. We play chess", "B. We buy ice-cream", "C. We play football"], correctAnswer: "C" },
        { id: 3, type: 'multiple-choice', text: "", options: ["A. He is wonderful, of course", "B.Not exactly so", "C. He is well"], correctAnswer: "B" },
        { id: 4, type: 'multiple-choice', text: "", options: ["A. I will", "B. Thank you", "C. Certainly"], correctAnswer: "C" },
        { id: 5, type: 'multiple-choice', text: "", options: ["A. I prefer to go there by train.", "B. As usual in the open air.", "C.In a match "], correctAnswer: "C" },
        { id: 6, type: 'multiple-choice', text: "", options: ["A. It can’t be!", "B. Where does he work?", "C. Why does he think so?"], correctAnswer: "C" },
        { id: 7, type: 'multiple-choice', text: "", options: ["A. I think it's 20 degrees above zero.", "B.It looks like to rain. ", "C. Oh, yes, it's raining cats and dogs."], correctAnswer: "C" },
        { id: 8, type: 'multiple-choice', text: "", options: ["A. Yes, I went to The National Film Theatre last week and saw a Japanese film.", "B. I can go anywhere next week. So, let’s go to a cinema?", "C. Yes, I went there. It was awesome!"], correctAnswer: "A" },
      ]
    },
    {
      id: 2,
      title: "Part 2 (Questions 9-14)",
      instruction: "Complete the form using NO MORE THAN ONE WORD AND/OR A NUMBER.",
      audioUrl: "https://image2url.com/r2/default/audio/1772896882748-4db8ee97-f301-4b7e-a0d7-e6b0b83df763.mp3",
      text: "EXCURSION TO BRIGHTON\nThe coach will be parked outside the (9) ______ Hall.\nFirst, a tour of Brighton Lanes, which were narrow (10) ______, famous for jewellers.\nThen there's a coffee break inside the (11) ______ cafe.\nAt around 12.45, lunch will be served for £(12) ______.\nFrom 3 to 4, explore sights such as the Artists' (13) ______.\nFinally, (14) ______ tea will be served at the Grand Hotel.",
      questions: [
        { id: 9, type: 'gap-fill', correctAnswer: "town" },
        { id: 10, type: 'gap-fill', correctAnswer: "street" },
        { id: 11, type: 'gap-fill', correctAnswer: "Palace" },
        { id: 12, type: 'gap-fill', correctAnswer: "8.95" },
        { id: 13, type: 'gap-fill', correctAnswer: "studio" },
        { id: 14, type: 'gap-fill', correctAnswer: "cream" },
      ]
    },
    {
      id: 3,
      title: "Part 3 (Questions 15-18)",
      instruction: "Match each speaker to the place where the speaker is (A-H).",
      text: "A. in a bedroom cupboard\nB. in their desk at work\nC. on their living room wall\nD. in a kitchen drawer\nE. on a bookcase in their study\nF. beside their bed",
      audioUrl:"https://image2url.com/r2/default/audio/1772861626885-b7b7f305-3185-4175-8064-e611890a1ce7.mp3",
      questions: [
        { id: 15, type: 'multiple-choice', text: "Speaker 1", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "B" },
        { id: 16, type: 'multiple-choice', text: "Speaker 2", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "F" },
        { id: 17, type: 'multiple-choice', text: "Speaker 3", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "C" },
        { id: 18, type: 'multiple-choice', text: "Speaker 4", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "D" },
      ]
    },
    {
      id: 4,
      title: "Part 4 (Questions 19-23)",
      instruction: "Label the places (19-23) on the map (A-H).",
      audioUrl:"https://image2url.com/r2/default/audio/1772861706765-ec76a287-1102-4ed0-ae20-300bb64c69fe.mp3",
      hasMap: true,
      questions: [
        { id: 19, type: 'multiple-choice', text: "Box Office", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "C" },
        { id: 20, type: 'multiple-choice', text: "Children's Room", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "B" },
        { id: 21, type: 'multiple-choice', text: "Cafe", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "E" },
        { id: 22, type: 'multiple-choice', text: "Multimedia Room", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "H" },
        { id: 23, type: 'multiple-choice', text: "Showroom", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "G" },
      ]
    },
    {
      id: 5,
      title: "Part 5 (Questions 24-29)",
      instruction: "Choose the correct answer A, B or C.",
      audioUrl:"https://image2url.com/r2/default/audio/1772862066999-642ba92d-ab84-4fdd-b7c2-b19f531b2f49.mp3",
      questions: [
        { id: 24, type: 'multiple-choice', text: "What do the people have different opinions about?", options: ["A. how interesting the programme is", "B. the website design", "C. the choice of the objects in the collection"], correctAnswer: "B" },
        { id: 25, type: 'multiple-choice', text: "What does the woman like about the programme?", options: ["A.he consistency of quality in the interviews", "B. the fact that it is educational", "C. the way they talk about history"], correctAnswer: "B" },
        { id: 26, type: 'multiple-choice', text: "What does the woman say about the procedure in her department?", options: ["A. it could have been more efficient", "B. it does not necessarily help admit the best students", "C. going through the application forms is very tedious "], correctAnswer: "A" },
        { id: 27, type: 'multiple-choice', text: "What part of the man's suggestion worries the woman?", options: ["A. if it would be any better than the current approach", "B. if her colleagues would like it", "C. if the procedure would be secure"], correctAnswer: "C" },
        { id: 28, type: 'multiple-choice', text: "What is the project?", options: ["A. putting up decorations in a room", "B. building an extension to a house", "C. renovating a room"], correctAnswer: "C" },
        { id: 29, type: 'multiple-choice', text: "Both speakers agree that...", options: ["A. they could learn something from this work", "B. it is a relief that the work will start soon", "C.the process will cause certain discomfort"], correctAnswer: "C" },
      ]
    },
    {
      id: 6,
      title: "Part 6 (Questions 30-35)",
      instruction: "Complete the notes below. Write no more than one word only for each answer.",
      text: "EXPEDITION\nJames Munro and Greg Hamilton managed to finish an unsupported expedition through Greenland.\nAccording to James, the only things helping them in this expedition were (30) ________.\nBoth James' parents worked as (31) ________.\nJames believes that his love for (32) ________ made him more interested in adventures.\nJames admires Nansen as he was a diplomat, an explorer as well as a (33) ________.\nJames is convinced that having control over one's (34) ________ is essential for an explorer.\nJames believes that making use of (35) ________ is the best way for inexperienced explorers to get sponsors.",
      audioUrl:"https://image2url.com/r2/default/audio/1772861803670-bcc658d6-4646-4a1a-9705-53e35c756b8f.mp3",
      questions: [
        { id: 30, type: 'gap-fill', correctAnswer: "kites" },
        { id: 31, type: 'gap-fill', correctAnswer: "architects" },
        { id: 32, type: 'gap-fill', correctAnswer: "kayaking" },
        { id: 33, type: 'gap-fill', correctAnswer: "geologist" },
        { id: 34, type: 'gap-fill', correctAnswer: "mind" },
        { id: 35, type: 'gap-fill', correctAnswer: "network" },
      ]
    }
  ],
  reading: [
    {
      id: 1,
      title: "Part 1 (Questions 1-6)",
      instruction: "Fill in each gap with ONE word from the text.",
      text: "Buying toys for children can be somewhat confusing and frustrating for parents as well as for gift givers. (1)___________ can show surprising preferences in toys; a favourite is not necessarily expensive or unique or 'in'. Matching (2)___________ carefully to a child's age, however, can help this dilemma. Children usually fall into several different 'toy - preference' (3)___________ groups. Infants under eighteen months go through two stages. Before they can sit up, they (4) ___________ toys that appeal to the senses, such as colourful mobiles, squeaky rubber toys or big chewable beads. After they (5)___________ sit up, babies like 'graspable' things like blocks, nesting and stacking toys, and cloth picture books. Children from eighteen months to three years – toddlers like toys that move (as they are learning to do). (6)___________ also like to use their hands.",
      questions: [
        { id: 1, type: 'gap-fill', correctAnswer: "children" },
        { id: 2, type: 'gap-fill', correctAnswer: "toys" },
        { id: 3, type: 'gap-fill', correctAnswer: "age" },
        { id: 4, type: 'gap-fill', correctAnswer: "like" },
        { id: 5, type: 'gap-fill', correctAnswer: "can" },
        { id: 6, type: 'gap-fill', correctAnswer: "toddlers" },
      ]
    },
    {
      id: 2,
      title: "Part 2 (Questions 7-14)",
      instruction: "Match the situations (7-14) with the museums (A-J).",
      text: "MUSEUMS:\nA. MODERN ART MUSEUM\nB. STORY OF NATURE\nC. NATURE AT ITS BEST\nD. NEIL ARMSTRONG MUSEUM\nE. TAMERLANE MUSEUM\nF. THE WAY OF WATER\nG. FUN HISTORY\nH. MICHAELANGELO\nI. SWEET DREAMS\nJ. REVOLUTION MUSEUM",
      questions: [
        { id: 7, type: 'multiple-choice', text: "Rebecca and her children want to visit a history museum. Kids friendly, open after working days.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "G" },
        { id: 8, type: 'multiple-choice', text: "John and Mark are art enthusiasts. Wednesday, cheaper.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "H" },
        { id: 9, type: 'multiple-choice', text: "Alisher loves American history. Thursday to Saturday.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "J" },
        { id: 10, type: 'multiple-choice', text: "Jack is a science and rocket enthusiast. Wednesday evening.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "D" },
        { id: 11, type: 'multiple-choice', text: "Jamshid loves sharks and turtles. Sea reptiles and amphibians.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "F" },
        { id: 12, type: 'multiple-choice', text: "Aziza and Rustam are interested in history of America, Africa and Asia.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "E" },
        { id: 13, type: 'multiple-choice', text: "George is interested in endangered species and sea animals.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "C" },
        { id: 14, type: 'multiple-choice', text: "Rosie wants to visit a nature history museum. Kid friendly, evenings.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "B" },
      ]
    },
    {
      id: 3,
      title: "Part 3 (Questions 15-20)",
      instruction: "Choose the correct heading for each paragraph from the list below.",
      text: "List of Headings:\nA. Bright and safe\nB. The symbol of the capital\nC. The bus you don't need to drive\nD. Watching and learning\nE. The story of the name\nF. They have to be skilled and attentive\nG. Special traffic rules for the bus\nH. A perfect way to see the capital",
      questions: [
        { id: 15, type: 'multiple-choice', paragraph: "I. A walking school bus is a group of children walking to school with one or more adults. It can be informal — when two families take turns in getting their children to school. It also can be a structured and planned route with meeting points, a timetable and specially trained volunteers. It's certainly safer for kids who would otherwise walk alone to school. A walking school bus provides exercise and security.", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "C" },
        { id: 16, type: 'multiple-choice', paragraph: "II. Every day thousands of Londoners use big red buses to move around town. These buses were designed especially for London, by people who knew what London needed, and they have served their purpose well! There are hundreds of bus routes all over London. The double-decker bus has become an emblem of London, just as recognizable as Big Ben or Tower Bridge.", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "B" },
        { id: 17, type: 'multiple-choice', paragraph: "III. Have you ever wondered why school buses are either yellow or orange? Yellow is an attention-grabbing colour. Scientists have discovered yellow is 1.24 times better for catching our eye than red. People can detect yellow even from the corner of their eye. Yellow is easier to notice in dim light or bad weather. For these reasons, school buses in many countries are yellow.", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "A" },
        { id: 18, type: 'multiple-choice', paragraph: "IV. Few people know that the word bus is a short form of the Latin word omnibus. A businessman named Stanislas Baudry started the first horse-drawn omnibus service in the French city of Nantes in 1823. The first vehicles stopped in front of the hatter's shop which had a large sign Omnes Omnibus. Soon Nantes citizens gave the nickname omnibus to the vehicle. The word omnibus means for all in Latin. In 1828, Baudry launched the omnibus service in Paris too.", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "E" },
        { id: 19, type: 'multiple-choice', paragraph: "V. Moscow, like other touristic cities, has double-decker buses — so called hop-on — hop-off buses. A ticket for this bus is valid for one or two days. You can get on and off the bus as many times as you like. The second deck has two parts: an open part, and a closed one. You can enjoy the open part in the warm weather and the closed part when the weather is not very good. Every passenger is supplied with a free city map and a free headphone set to listen to the audio guide.", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "H" },
        { id: 20, type: 'multiple-choice', paragraph: "VI. The job of a bus driver goes beyond just driving the vehicle! Bus drivers are responsible for the safety of their passengers, which can sometimes be as many as 100 people! They are responsible for driving their assigned route and sometimes they have to take fares and answer passengers' questions. Bus drivers also check the safety of their vehicle and make sure it has working safety equipment like first aid kits and fire extinguishers.", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "F" },
      ]
    },
    {
      id: 4,
      title: "Part 4 (Questions 21-29)",
      instruction: "Read the text and choose the correct answer A, B, C or D for 21-24, and T/F/NI for 25-29.",
      text: "THE RAINMAKER\nScientists are very sceptical about man's ability to initiate weather like, rain or snow. Nevertheless, in 1902, an American, Charles Hatfield, first claimed he had invented a new chemical method to generate rain. He applied his method on a commercial basis for the next twenty years and got a reputation as a rainmaker.\n\nHatfield lived in Kansas and worked for a company that sold sewing machines. He considered his work boring and felt fed up with it. He dreamt of fame. Chemistry had always been Hatfield's great interest. For several years he was working on a formula that could initiate rain. After 1904, when he moved to California, his life changed dramatically. The advertisements he placed in the Los Angeles newspapers promised perfect rain for only fifty dollars. Because of the extremely dry season several farmers decided to try their chance. Hatfield and his brother built a tower on the top of a mountain and dispersed some chemicals into the air. Incredibly enough, soon it started to rain.\n\nSome meteorologists did not regard Hatfield's success as genuine. They were sure it was a coincidence and that most rain was the result of cyclones. On the other hand, there were scientists who took it quite seriously and wanted to watch the phenomenon in reality. It also needs to be mentioned that Hatfield was not always lucky. For example, in 1906 he was asked to initiate rain in the gold fields of the Klondike. No matter how hard he tried, the sky stayed cloudless.",
      questions: [
        { id: 21, type: 'multiple-choice', text: "At first, Charles Hatfield...", options: ["A. worked for a company that sold sewing machines", "B. claimed that he invented a rainmaking formula", "C. placed an ad for a paper"], correctAnswer: "A" },
        { id: 22, type: 'multiple-choice', text: "On one hand, scientists regarded his success as a coincidence, on the other hand…", options: ["A. Charles was right, he really invented a formula for rainmaking", "B. He never shared his secrets with them, which made them very angry", "C. there were some scientists who really believed the idea"], correctAnswer: "C" },
        { id: 23, type: 'multiple-choice', text: "After he 'made' the rain in San Diego, he...", options: ["A. was paid ten thousand dollars", "B. eventually gave three-billion-dollars for the rain’s damages", "C. didn’t get the money however, escaped the punishment."], correctAnswer: "C" },
        { id: 24, type: 'multiple-choice', text: "Charles' experiment involved...", options: ["A. some chemicals and a mountain.", "B. building a tower and pouring chemicals from them.", "C. some ancient “wizardry”"], correctAnswer: "B" },
        { id: 25, type: 'tfni', text: "Hatfield's work for the company had nothing to do with chemistry.", options: ["True", "False", "No Information"], correctAnswer: "True" },
        { id: 26, type: 'tfni', text: "Hatfield had studied chemistry at college.", options: ["True", "False", "No Information"], correctAnswer: "False" },
        { id: 27, type: 'tfni', text: "Californian farmers paid Hatfield more than the agreed sum.", options: ["True", "False", "No Information"], correctAnswer: "No Information" },
        { id: 28, type: 'tfni', text: "Hatfield had to show his secret formula to the Los Angeles authorities.", options: ["True", "False", "No Information"], correctAnswer: "False" },
        { id: 29, type: 'tfni', text: "Hatfield never failed in his rain initiating business.", options: ["True", "False", "No Information"], correctAnswer: "False" },
      ]
    },
    {
      id: 5,
      title: "Part 5 (Questions 30-35)",
      instruction: "Fill in the missing information. Write no more than ONE WORD and/or A NUMBER.",
      text: "THE HISTORY OF PENCIL\nGraphite was discovered in 1564 in Borrowdale in England when lightning struck a local tree. Local people found out that the black substance was different from burning ash. It was soft, thus left marks everywhere. It was soon put to use by locals in marking their sheep.\n\nIn Italy, graphite sticks were initially wrapped in string or sheepskin for stability. Then around 1560, an Italian couple made wood-encased carpentry pencils. Shortly thereafter in 1662, a superior technique was discovered by German people: two wooden halves were carved, a graphite stick inserted, and the halves then glued together.\n\nModern pencils do not contain lead; the 'lead' is actually a mix of finely ground graphite and clay powders. The more clay you put in, the higher hardness the core has.",
      questions: [
        { id: 30, type: 'gap-fill', text: "Graphite was found under a ______ in Borrowdale.", correctAnswer: "tree" },
        { id: 31, type: 'gap-fill', text: "Ancient people used graphite to mark their ______.", correctAnswer: "sheep" },
        { id: 32, type: 'gap-fill', text: "In the eighteenth century, the ______ protect the mines.", correctAnswer: "government" },
        { id: 33, type: 'gap-fill', text: "Russian astronauts preferred ______ pencils.", correctAnswer: "grease" },
        { id: 34, type: 'multiple-choice', text: "Which statement is FALSE according to the passage?", options: ["A. Italy is probably the first country in the whole world to make pencils.", "B. Pencils are not produced any more since the reign of Elizabeth I.", "C. American astronauts did not replace mechanical pencils immediately after the zero-gravity pencils were invented.", "D. Graphite makes a pencil harder and sharper."], correctAnswer: "D" },
        { id: 35, type: 'multiple-choice', text: "What is the writer's conclusion in the reading passage?", options: ["A. Pencils will soon become obsolete in the digitized world.", "B. Artists and students are using less and less each year even though they are everywhere", "C. Using pencil is becoming more common than anytime now", "D. Other than architects, waiters and students, people doesn’t use pencil commonly and have already been replaced by tablet sketch pads and digital blueprint"], correctAnswer: "C" },
      ]
    }
  ]
};
