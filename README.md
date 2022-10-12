# React-Nomad-Todolist
노마드코더 마스터클래스 투두리스트

## useForm()
여러번의 타당성 검증이 필요하고 input이 많을 때 사용한다.

```JS
const {register, watch,handleSubmit, formstate}=useForm()
```
### register  => 기본 장착의 느낌 , 값을 네이밍
### watch => 변경된 값을 반환
### handleSubmit => 타당성을 검사한다
함수로 인자를 두가지 받는다 (성공했을 때 실행시킬함수, 실패했을 때 실행시킬함수)
### formState => 타당성검사를 통해 안되는 부분을 세밀하게 알려준다. message도 전달해준다.(이를 통해 사용자에게 오류를 말해줄수있다.)

## 내가 생각하는 useForm()의 장점 

일단은 useState()를 각 input마다 만들지 않아도 된다. useForm() 을 한번 생성하고 register(key)값만 변경하면 
각 input에 맞는 value값을 지정하고 변화를 인지할 수 있다.

```JS
<input {...register("name" , {required:true})/>
<input {...register("name" , {pattern: /^[A-Za-z0-9._%+-]+@naver.com$/, 
message:"only naver",},})}//정규식
})/>
```
## 정규식 

/^[A-Za-z0-9._%+-]+@naver.com$/
/^ :문장의 시작/
/[] : 문자셋 안의 아무문자/
/+ : 하나 또는 많이/
