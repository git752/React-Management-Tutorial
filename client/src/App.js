import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})

// const customers = [
// {
//   'id' : 1,
//   'image' : 'https://placeimg.com/64/64/any/1',
//   'name' : '홍길동',
//   'birthday' : '919119',
//   'gender' : '남자',
//   'job' : '대학생'
// },
// {
//   'id' : 2,
//   'image' : 'https://placeimg.com/64/64/any/2',
//   'name' : '훙길둥',
//   'birthday' : '313141',
//   'gender' : '남자',
//   'job' : '대학생'
// }
// ]


class App extends Component{

  state = {
    customers: ""
  }

  componentDidMount(){
    // callApi를 불러와서 then함수로 하여금 res라는 이름으로 바뀌고 데이터를 customers에 담는다
    this.callApi() 
    .then(res => this.setState({customers: res})) 
    .catch(err => console.log(err)); //error 처리
  }

  callApi = async () => {
    const response = await fetch('/api/customers'); // 가져올 api주소 입력
    const body = await response.json();
    return body; // body(데이터) 반환
  }


    render(){
      const { classes } = this.props; // props는 변경될 수 없는 데이터를 명시 할때, state는 변경 되는 데이터를 명시 할때 사용
      return(
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableHead>
            <TableBody>
                {
                  this.state.customers ? this.state.customers.map(c => {
                    return(
                    <Customer
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />);
                  }) : "데이터가 없습니다."
                }
            </TableBody>
          </Table>
        </Paper>
      );
    }
}
    


export default withStyles(styles)(App);
