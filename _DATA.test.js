const rewire = require("rewire")
const _DATA = rewire("./_DATA")
const generateUID = _DATA.__get__("generateUID")
const formatQuestion = _DATA.__get__("formatQuestion")
// @ponicode
describe("generateUID", () => {
    test("0", () => {
        let callFunction = () => {
            generateUID()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_DATA._getQuestions", () => {
    test("0", () => {
        let callFunction = () => {
            _DATA._getQuestions()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("formatQuestion", () => {
    test("0", () => {
        let callFunction = () => {
            formatQuestion({ optionOneText: 1.0, optionTwoText: 1, author: "user123" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            formatQuestion({ optionOneText: 0.5, optionTwoText: -5.48, author: "user_name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            formatQuestion({ optionOneText: -1.0, optionTwoText: -5.48, author: "user_name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            formatQuestion({ optionOneText: 10.0, optionTwoText: 1, author: "user-name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            formatQuestion({ optionOneText: 10.0, optionTwoText: -100, author: "user name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            formatQuestion({ optionOneText: Infinity, optionTwoText: Infinity, author: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_DATA._saveQuestion", () => {
    test("0", () => {
        let callFunction = () => {
            _DATA._saveQuestion(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _DATA._saveQuestion(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _DATA._saveQuestion(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _DATA._saveQuestion(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _DATA._saveQuestion(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _DATA._saveQuestion(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_DATA._saveQuestionAnswer", () => {
    test("0", () => {
        let callFunction = () => {
            _DATA._saveQuestionAnswer({ authedUser: "user name", qid: 1.0, answer: "test_user" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _DATA._saveQuestionAnswer({ authedUser: "username", qid: 0.5, answer: "fake_user_id" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _DATA._saveQuestionAnswer({ authedUser: "user-name", qid: 1.0, answer: "fake_user" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _DATA._saveQuestionAnswer({ authedUser: 123, qid: -1.0, answer: "test_user" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _DATA._saveQuestionAnswer({ authedUser: "user name", qid: 0.0, answer: "c466a48309794261b64a4f02cfcc3d64" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _DATA._saveQuestionAnswer({ authedUser: undefined, qid: Infinity, answer: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
