// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following is false?",
    answer: "High bias leads to overfitting",
    options: [
      "Bias is the true error of the classifier in the concept class",
      "Bias is high if the concept class cannot model the true data distribution well",
      "High bias leads to overfitting",
      "For high bias both train and test error will be high"
    ]
  },
    {
    numb: 2,
    question: "What is the use of validation dataset in Machine Learning?",
    answer: "Increase the value of k",
    options: [
      "Increase the value of k",
      "Decrease the value of k",
      "Changing the value of k will not change the effect of the noise",
      "None of the above"
    ]
  },
    {
    numb: 3,
    question: "Choose the correct option:\n(I) Logistic Regression is used for regression purposes.\n(II) Logistic Regression is used for classification purposes.",
    answer: "Both (I) and (II) are correct",
    options: [
      "Only (I) is correct",
      "Only (II) is correct",
      "Both (I) and (II) are correct",
      "Both (I) and (II) are incorrect"
    ]
  },
    {
    numb: 4,
    question: "Which of the following statements are true about the KNN algorithm?",
    answer: "KNN does more computation on test time rather than train time",
    options: [
      "KNN does more computation on test time rather than train time",
      "KNN does lesser computation on test time rather than train time",
      "KNN does equal amount of computation on test time and train time",
      "None of the above"
    ]
  },
    {
    numb: 5,
    question: "Which of the following options is/are correct regarding the benefits of the ensemble model?\n(I) Better performance\n(II) More generalized model\n(III) Better interpretability",
    answer: "1 and 2",
    options: [
      "1 and 3",
      "2 and 3",
      "1 and 2",
      "1,2 and 3"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];