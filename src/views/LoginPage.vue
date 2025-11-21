<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="framework/font-awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="framework/reset.css">
		<link rel="stylesheet" href="css/login.css">
		<script src="js/vue.js" type="text/javascript" charset="utf "></script>
		<!-- 引入样式 -->
		<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
		<!-- 引入组件库 -->
		<script src="https://unpkg.com/element-ui/lib/index.js"></script>
		<title>东软体检APP-登录</title>
	</head>
	<body>
		<!-- 总容器 -->
		<div class="wrapper" id="app">
			<h1>体检预约-登录</h1>
			<section>
				<div class="input-box">
					<i class="fa fa-user-o"></i>
					<input type="text" placeholder="输入手机号" v-model="u.tel">
				</div>
				<div class="input-box">
					<i class="fa fa-lock"></i>
					<input type="password" placeholder="输入登录密码" v-model="u.pwd">
				</div>
				<div class="reg-box">
					<p onclick="location.href='register.html'">注册</p>
					<p>忘记密码？</p>
				</div>
				<div class="button-box" @click="login">登录</div>
			</section>

			<footer>
				<div>
					<div class="line"></div>
					<p>有疑问请联系客服</p>
					<div class="line"></div>
				</div>
				<p>4008-XXX-XXX</p>
			</footer>
		</div>
		<script>
			new Vue({
				el: '#app',
				data: {
					msg: "123",
					ulist: [],
					u: {
						tel: "",
						pwd: ""
					}
				},
				methods: {
					cleardata() {
						this.u.tel = ""
						this.u.pwd = ""
					},
					// location.href='index.htmL'	
					login() {
						for (let i = 0; i < this.ulist.length; i++) {
							if (this.u.tel = this.ulist[i].tel && this.u.pwd == this.ulist[i].pwd) {
								sessionStorage.setItem("u",JSON.stringify(this.ulist[i]))
								location.href = 'index.html'
								break;
							}
						}
						this.$message({
							message: '用户名或者密码错误，请重新输入',
							type: 'error'
						});
					}
				},
				mounted() {
					this.ulist = JSON.parse(sessionStorage.getItem("ulist"))
					console.log(this.ulist);
					if (!this.ulist) { // ! 判断非空
						this.ulist = []
					} else {
						///console.log(2);
					}
				}
			})
		</script>
	</body>
</html>
