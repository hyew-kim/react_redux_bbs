// action type 지정
// 뒤에  as const를 붙여서 string이 아닌 실제 문자열 값으로 type 추론하게 함
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increase = ()=> ({
    type: INCREASE
});

export const decrease = ()=>({
    type: DECREASE
});
// payload: 액션에 부가적으로 필요한 값
export const increaseBy = (diff: number)=>({
    type: INCREASE_BY,
    payload: diff 
});

// 액션 겍체들에 대한 타입 준비
// ReturnType<typeof ___> : 특정 함수의 반환값 추론
type CounterAction = | ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>;

// redux module에서 관리 할 상태의 타입을 선언
type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0
};

//reducer-> state와 함수의 반환값이 일치하도록 작성!
function counter (state: CounterState = initialState, action: CounterAction) : CounterState
{
    switch (action.type) {
        case INCREASE:
            return {count: state.count + 1};
        case DECREASE:
             return {count: state.count + 1};
        case INCREASE_BY:
            return {count: state.count + action.payload};
        default:
            return state;
    }
}

export default counter;