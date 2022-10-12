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
### formState => 타당성검사를 통해 안되는 부분을 세밀하게 알려준다. message도 전달해준다.
