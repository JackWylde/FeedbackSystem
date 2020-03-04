import Firebase from "../data-access/Firebase";
import CONSTANTS from "../common/constants";

const parseAnswers = (answers) => {
    var payload = {}
    Object.keys(answers).forEach(a => {
        payload[a] = JSON.parse(answers[a]);
    });
    
    return payload;
}


const FirebaseService = {
    getAll: async (collection) => {
        const snapshot = await Firebase.collection(collection).get();
        return snapshot.docs.map(doc => doc.data());
    },

    getSingle: (collection, document) => {
        return Firebase.collection(collection).doc(document).get();
    },

    update: (input, collection, document, soft=false) => {
        if(soft)
            return Firebase.collection(collection).doc(document).update(input);
        else
            return Firebase.collection(collection).doc(document).set(input);
    },

    create: (input, collection) => {
        return Firebase.collection(collection).add(input);
    },

    createQuestionaire: (input) => {
        return FirebaseService.create(input, CONSTANTS.Questionaires);
    },

    createQuestion: (input, questionaire) => {
        return FirebaseService.update(input, CONSTANTS.Questionaires, questionaire);
    },

    createQuestionType: async (input, type='General') => {
        return FirebaseService.update(input, CONSTANTS.QuestionTypes, type, false)
    },

    getAnswers: async (department) => {
        var answers = await FirebaseService.getSingle(CONSTANTS.Answers, department);
        return parseAnswers(answers.data());
    },

    createAnswer: async (input, department, questionaire) => {
        var answers = await FirebaseService.getAnswers(department);
        answers[questionaire].push(input)
        var payload = {};
        payload[questionaire] = JSON.stringify(answers[questionaire]);
        FirebaseService.update(payload, CONSTANTS.Answers, department, false);
    },
}

export default FirebaseService;