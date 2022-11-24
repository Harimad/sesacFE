import React from 'react'
// =================실습1=================
import Problem1 from './problem/Problem1'
import Problem2 from './problem/Problem2'
import Problem3 from './problem/Problem3'
import Problem4 from './problem/Problem4'
import Problem5 from './problem/Problem5'
import Problem6 from './problem/Problem6'
// =================실습2=================
import NewProblem1 from './problem2/Problem1'
import NewProblem2 from './problem2/Problem2'
import NewProblem3 from './problem2/Problem3'
import NewProblem4 from './problem2/Problem4'

const App = () => {
  return (
    <div>
      {/* =================실습1================= */}
      {/* 1번 */}
      <Problem1 />

      {/* 2번 */}
      {/* 2-1 : var는 함수 스코프이기 때문에 if(true)의 블록스코프인 { }(중괄호에서) 변수 a값이 bye로 재할당됩니다. */}
      {/* 2-2 : let은 블록스코프 입니다. if 문안의 { }(중괄호)에서 선언된 변수는 밖에 선언된 동일한 이름의 변수와 별개로 인식됩니다. */}
      <Problem2 />

      {/* 3번 */}
      <Problem3 />

      {/* 4번 */}
      <Problem4 />

      {/* 5번 */}
      <Problem5 />

      {/* 6번 */}
      <Problem6 />

      {/* =================실습2================= */}
      <NewProblem1 />
      <NewProblem2 />
      <NewProblem3 />
      <NewProblem4 />
    </div>
  )
}

export default App
