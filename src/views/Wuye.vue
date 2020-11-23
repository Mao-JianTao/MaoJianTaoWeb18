 <template>
 <div id="app">
<Center title="物业缴费"></Center>
    <div class="box-center">
      <el-tabs type="card">
        <el-tab-pane label="水费">
          <div class="center">
            <span class="center1">查看历史账单</span>
            <div class="center2">
              <p style="font-weight: 900">2019/08<span>水费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>水费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>水费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2">
              <p style="font-weight: 900">2019/08<span>水费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>水费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>水费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2">
              <p style="font-weight: 900">2019/08<span>水费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>水费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>水费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="block center4">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
              >
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="电费">
          <div class="center">
            <span class="center1">查看历史账单</span>
            <div class="center2">
              <p style="font-weight: 900">2019/08<span>电费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>电费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>电费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2">
              <p style="font-weight: 900">2019/08<span>电费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>电费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>电费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2">
              <p style="font-weight: 900">2019/08<span>电费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>电费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="center2" style="margin-left: 30px">
              <p style="font-weight: 900">2019/08<span>电费</span></p>
              <p>小星社区1栋2单元5楼0501室<span>小张</span></p>
              <p style="margin-top: 50px">
                <span>￥</span><span>100.00</span><span>立即缴费</span>
              </p>
            </div>
            <div class="block center4">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
              >
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="停车费">
          <div class="box1">
            <span class="center1">查看历史账单</span>
            <div class="box1-1">
              <div>
                <span>湘A23J89</span><br />
                <span>长沙XXX社区停车场</span>
              </div>
              <div>入场时间: 2019-08-13 12:30</div>
              <div>停车时长: 1天2小时30分<span>05</span>秒</div>
              <div>缴费金额: <span>20</span>元</div>
              <div>立即缴费</div>
            </div>
            <div class="box1-1">
              <div>
                <span>湘A23J89</span><br />
                <span>长沙XXX社区停车场</span>
              </div>
              <div>入场时间: 2019-08-13 12:30</div>
              <div>停车时长: 1天2小时30分<span>05</span>秒</div>
              <div>缴费金额: <span>20</span>元</div>
              <div>立即缴费</div>
            </div>
            <div class="box1-1">
              <div>
                <span>湘A23J89</span><br />
                <span>长沙XXX社区停车场</span>
              </div>
              <div>入场时间: 2019-08-13 12:30</div>
              <div>停车时长: 1天2小时30分<span>05</span>秒</div>
              <div>缴费金额: <span>20</span>元</div>
              <div>立即缴费</div>
            </div>
            <div class="box1-1">
              <div>
                <span>湘A23J89</span><br />
                <span>长沙XXX社区停车场</span>
              </div>
              <div>入场时间: 2019-08-13 12:30</div>
              <div>停车时长: 1天2小时30分<span>05</span>秒</div>
              <div>缴费金额: <span>20</span>元</div>
              <div>立即缴费</div>
            </div>
            <div class="box1-1">
              <div>
                <span>湘A23J89</span><br />
                <span>长沙XXX社区停车场</span>
              </div>
              <div>入场时间: 2019-08-13 12:30</div>
              <div>停车时长: 1天2小时30分<span>05</span>秒</div>
              <div>缴费金额: <span>20</span>元</div>
              <div>立即缴费</div>
            </div>
            <div class="box1-1">
              <div>
                <span>湘A23J89</span><br />
                <span>长沙XXX社区停车场</span>
              </div>
              <div>入场时间: 2019-08-13 12:30</div>
              <div>停车时长: 1天2小时30分<span>05</span>秒</div>
              <div>缴费金额: <span>20</span>元</div>
              <div>立即缴费</div>
            </div>
            <div class="block center4" style="margin-top: 45px">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
              >
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="燃气费">
          <div class="center">
            <p class="center1-1">
              <span style="margin-left: 40px; margin-right: 10px"
                >缴费单位:</span
              >
              <el-select
                v-model="select"
                size="mini"
                slot="prepend"
                placeholder="111燃气有限公司"
                style="width: 200px"
              >
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option el-option label="用户电话" value="3"></el-option>
              </el-select>
              <span style="margin-left: 70px; margin-right: 10px"
                >用户编号:</span
              >
              <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable
                size="mini"
                style="width: 250px"
              ></el-input>
              <span class="center1-2">查询</span>
              <span class="center1-3">查看历史账单</span>
            </p>
            <hr style="border: 1px solid #ededff; margin-top: 50px" />
            <p class="center1-4" style="margin-top: 80px">
              <span>燃汽费用(元):</span
              ><el-input
                v-model="input"
                placeholder="300.00"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-4">
              <span>缴违约金(元):</span
              ><el-input
                v-model="input"
                placeholder="300.00"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-4">
              <span>应交金额(元):</span
              ><el-input
                v-model="input"
                placeholder="300.00"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-4">
              <span>当前余额(元):</span
              ><el-input
                v-model="input"
                placeholder="300.00"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-4">
              <span>未缴金额(元):</span
              ><el-input
                v-model="input"
                placeholder="300.00"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-5">立即缴费</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="固定宽带">
          <div class="center">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="个人充值缴费" name="first">
                <div class="gd-1">
                  <p>
                    <span style="margin-right:10px">产品类型:</span>
                    <select style="width:300px;height:25px">
                      <option>宽带</option>
                      <option>固定</option>
                      <option>手机</option>
                    </select>
                  </p>
                  <p>
                    <span  style="margin-right:10px">所在城市:</span><span style="margin-right:10px">长沙</span><span style="color:blue">[切换城市]</span>
                  </p>
                  <p>
                    <span  style="margin-right:10px">充值号码:</span><input type="text" placeholder="13512322262" style="height:30px;width:290px">
                  </p>
                  <p>
                    <span  style="margin-right:10px">确认号码:</span>13512322262
                  </p>
                  <span class="gd-2">填写充值信息</span>
                </div>
                <div class="gd-3">
                  <p>
                    <span  style="margin-right:10px">充值金额:</span><span class="gd-4">50</span>
                    <span class="gd-5">100</span><span class="gd-5">200</span><span class="gd-5">300</span>
                    <span>其他:</span><input style="height:25px;width:100px">
                  </p>
                  <p>
                    <span style="margin-right:10px">验证码:</span><input style="height:25px;width:200px">
                    <img src="../assets/yzm.png" height="30px" style="float:right;margin-right:350px">
                  </p>
                  <p>
                    <span style="margin-right:10px">支付方式:</span><input type="radio">
                    <img src="../assets/zhifubao.png" width="60px" style="float:right;margin-right:550px;margin-top:-20px"> 
                  </p>
                  <p class="center1-6">立即缴费</p>
                  <span class="gd-2-1">选择支付方式</span>
                </div>  
              </el-tab-pane>
              <el-tab-pane label="宽带包年续费" name="second">
                  <div class="gd-1" style="height:400px">
                  <p>
                    <span  style="margin-right:10px">宽带账号:</span><input type="text" placeholder="13512322262" style="height:30px;width:290px">
                  </p>
                  <p>
                    <span  style="margin-right:10px">确认账号:</span>13512322262
                  </p>
                  <p>
                    <span  style="margin-right:10px">宽带密码:</span><input type="text" placeholder="13512322262" style="height:30px;width:290px">
                  </p>
                  <p>
                    <span style="margin-right:10px">输验证码:</span><input style="height:25px;width:200px">
                    <img src="../assets/yzm.png" height="30px" style="float:right;margin-right:120px">
                  </p>
                    <p class="center1-6" style="width:250px;margin-left:300px">立即缴费</p>
                    <span class="gd-2">填写充值信息</span>
                </div>
                </el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
        <el-tab-pane label="有线电视"
          ><div class="center">
            <p class="center1-1">
              <span style="margin-left: 40px; margin-right: 10px"
                >缴费单位:</span
              >
              <el-select
                v-model="select"
                slot="prepend"
                size="mini"
                placeholder="111广播电视有限公司"
                style="width: 300px"
              >
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option el-option label="用户电话" value="3"></el-option>
              </el-select>
              <span style="margin-left: 70px; margin-right: 10px"
                >智能卡号:</span
              >
              <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable
                size="mini"
                style="width: 300px"
              ></el-input>
              <span class="center1-2">查询</span>
              <span class="center1-3">查看历史账单</span>
            </p>
            <hr style="border: 1px solid #ededff; margin-top: 50px" />
            <p class="center1-4" style="margin-top: 80px">
              <span>已购套餐:</span
              ><el-input
                v-model="input"
                placeholder="488.00元/年 - 单向高清全能套餐"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-4">
              <span>缴费单位:</span
              ><el-input
                v-model="input"
                placeholder="111广播电视有限公司"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-4">
              <span>缴费户号:</span
              ><el-input
                v-model="input"
                placeholder="111111"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-4" style="margin-left:25px">
              <span>户 名:</span
              ><el-input
                v-model="input"
                placeholder="xxx"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-4" style="margin-left:25px">
              <span>地 址:</span
              ><el-input
                v-model="input"
                placeholder="xx市xx区xx街道xx社区xx栋xx室"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-5">立即缴费</p>
          </div></el-tab-pane
        >
        <el-tab-pane label="物业费">
          <div class="center">
            <p class="center1-1">
              <span style="margin-left: 40px; margin-right: 10px"
                >缴费单位:</span>
              <el-select
                v-model="select"
                slot="prepend"
                size="mini"
                placeholder="111广播电视有限公司"
                style="width: 200px"
              >
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option el-option label="用户电话" value="3"></el-option>
              </el-select>
              <span style="margin-left: 70px; margin-right: 10px"
                >智能卡号:</span
              >
              <el-input
                placeholder="请输入内容"
                v-model="input"
                size="mini"
                clearable
                style="width: 200px"
              ></el-input>
              <span class="center1-2">查询</span>
              <span class="center1-3">查看历史账单</span>
            </p>
            <hr style="border: 1px solid #ededff; margin-top: 50px" />
            <p class="center1-4" style="margin-top: 80px">
              <span>业主姓名:</span
              ><el-input
                v-model="input"
                placeholder="小明"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-4">
              <span>手机号码:</span
              ><el-input
                v-model="input"
                placeholder="15212311109"
                style="width: 400px"
              ></el-input>
            </p>
            <p class="center1-4">
              <span>住户地址:</span
              ><el-input
                v-model="input"
                placeholder="xx小区xx栋xx室"
                :disabled="true"
                style="width: 400px"
              ></el-input>
            </p>
            <p style="margin-left:360px">
              <span>需缴纳的物业费如下:</span>
              <table style="margin-left:80px;margin-top:30px;width:400px">
    <tr>
        <td><input type="checkbox"></td>
        <td width="400px">时间</td>
        <td>费用/元</td>
    </tr>
    <tr>
        <td><input type="checkbox"></td>
        <td width="400px">2019年6月</td>
        <td><span style="color:#ff6600">￥</span>100.00</td>
    </tr>
    <tr>
        <td><input type="checkbox"></td>
        <td width="400px">2019年7月</td>
        <td><span style="color:#ff6600">￥</span>100.00</td>
    </tr>
    <tr>
        <td><input type="checkbox"></td>
        <td width="400px">2019年8月</td>
        <td><span style="color:#ff6600">￥</span>100.00</td>
    </tr>
</table>
            </p>
            <p class="center1-5" style="margin-left:590px">立即缴费</p>
          </div>    
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Center from "../components/Center";
export default {
  name: "Wuyjf",
  components: {
    Center,
  },
  data() {
    return {
      select: "",
      input: "",
      activeName: "first",
    };
  },
};
</script>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
.box-center{
    margin-top: 200px;
    padding-top:0px;
}
table {
  width: 200px;
  margin-top: 20px;
  border-top: 1px solid #b6a4fe;
  border-left: 1px solid #b6a4fe;
  border-spacing: 0; /*去掉单元格间隙*/
  white-space: nowrap;
}
table td {
  padding: 10px 30px;
  border-bottom: 1px solid #b6a4fe;
  border-right: 1px solid #b6a4fe;
  text-align: center;
}
table > tr:nth-of-type(1) td {
  background: #b6a4fe;
  border-right: 1px solid #fff;
  color: #fff;
  font-weight: 900;
}
table tr {
  height: 60px;
}
.gd-1 {
  width: 80%;
  margin-left: 100px;
  height: 300px;
  margin-top: 50px;
  border: 1px solid rgb(179, 179, 179);
}

.gd-1 > p {
  margin-left: 240px;
  margin-top: 20px;
  width: 500px;
  font-size: 15px;
  padding: 10px 0;

}
.gd-2 {
  padding: 10px 20px;
  border: 1px solid #cfcfcf;
  position: absolute;
  top: 30px;
  left: 120px;
  font-size: 15px;
  background-color: #fff;
}
.gd-2-1 {
  padding: 10px 20px;
  border: 1px solid #cfcfcf;
  position: absolute;
  top: 380px;
  left: 120px;
  background-color: #fff;
  font-size: 16px;
}
.gd-3 {
  width: 80%;
 margin-top: 50px;
 margin-left: 100px;
  height: 300px;
  border: 1px solid #cfcfcf;
  font-size: 15px;
}
.gd-3 p {
  margin-left: 257px;
  margin-top: 20px;
  padding: 10px 0;
}
.gd-3 p:nth-of-type(2) {
  margin-left: 257px;
}
.gd-3 p:nth-of-type(4) {
  margin-left: 257px;
}
.gd-4 {
  padding: 5px 20px;
  border-radius: 7px;
  color: #fff;
  margin-right: 10px;
  background-color: #169bd5;
}
.gd-5 {
  padding: 5px 13px;
  border-radius: 7px;
  margin-right: 10px;
  border: 1px solid #c5c5c5;
}
.center1-1 {
    height: 50px;
    line-height: 50px;
  margin-top: 0px;
}
.center1-2 {
  padding: 5px 40px;
  margin-left: 40px;
  background-color: #b6a4fe;
  border-radius: 5px;
  color: #fff;
}
.center1-3 {
  padding: 5px 20px;
  margin-left: 10px;
  background-color: #b6a4fe;
  border-radius: 5px;
  color: #fff;
}
.center1-4 {
  text-align: center;
  padding: 10px 0;
}
.center1-4 span {
  margin-right: 10px;
}
.center1-5 {
  width: 200px;
  height: 50px;
  background-color: #b6a4fe;
  border-radius: 8px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  margin-left: 500px;
  margin-top: 50px;
}
.center1-6 {
  width: 400px;
  height: 30px;
  background-color: #169bd5;
  border-radius: 8px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  clear: both;
  margin-top: 20px;
}
#app {
  height: 1160px;
}
.box {
  width: 1550px;
  height: 40px;
  background: linear-gradient(90deg, #b6a4fe, #fff);
  float: left;
  margin-left: 20px;
  margin-top: 21px;
  color: #fff;
  line-height: 40px;
  font-weight: 900;
  text-indent: 30px;
}
.box-center {
  height: 800px;
  margin-top: 40px;
  width: 80%;
  float: left;
  margin-left: 20px;
}
.center {
  width: 99.8%;
  border: 1px solid #dad1ff;
  height: 900px;
}
.center1 {
  float: right;
  padding: 10px 20px;
  background-color: #b9b9ff;
  color: #fff;
}
.center2 {
  width: 300px;
  height: 150px;
  border: 2px solid #ededff;
  border-radius: 14px;
  background-color: #f9f9ff;
  float: left;
  margin-top: 80px;
  margin-left: 90px;
}
.center2 p {
  margin-top: 15px;
  margin-left: 10px;
  font-size: 14px;
}
.center2 p:nth-of-type(1) span {
  margin-left: 20px;
}
.center2 p:nth-of-type(2) span {
  margin-left: 50px;
}
.center2 p:nth-of-type(3) span:nth-of-type(1) {
  color: #fcaa3e;
  font-weight: 900;
}
.center2 p:nth-of-type(3) span:nth-of-type(2) {
  color: #55a0ff;
  font-weight: 900;
}
.center2 p:nth-of-type(3) span:nth-of-type(3) {
  margin-left: 130px;
  padding: 3px 10px;
  color: #fff;
  border-radius: 8px;
  background-color: #b6a4fe;
  font-size: 16px;
}
.center:nth-of-type(1) div:nth-of-type(4) {
  margin-top: 30px;
}
.center div:nth-of-type(5) {
  margin-top: 30px;
}
.center div:nth-of-type(6) {
  margin-top: 30px;
}
.center div:nth-of-type(7) {
  margin-top: 30px;
}
.center div:nth-of-type(8) {
  margin-top: 30px;
}
.center div:nth-of-type(9) {
  margin-top: 30px;
}
.center4 {
  text-align: center;
  clear: both;
  border-top: 1px solid #b9b9ff;
  border-bottom: 1px solid #b9b9ff;
  height: 30px;
  padding: 20px;
  margin-top: 137px;
  float: left;
  width: 100%;
}
.box1 {
  width: 99.8%;
  border: 1px solid #dad1ff;
  height: 900px;
  font-size: 15px;
}
.box1-1 {
  width: 240px;
  height: 350px;
  border: 1px solid #ceceff;
  border-radius: 48% 48% 0 0;
  float: left;
  margin-top: 40px;
  margin-left: 100px;
  overflow: hidden;
}
.box1-1 div:nth-of-type(1) {
  width: 100%;
  height: 120px;
  background-color: #b6a4fe;
  color: #fff;
  text-align: center;
  line-height: 30px;
}
.box1-1 div:nth-of-type(1) span:nth-of-type(1) {
  font-size: 20px;
  margin-top: 40px;
  margin-left: 80px;
  float: left;
}
.box1-1 div:nth-of-type(1) span:nth-of-type(2) {
  font-size: 18px;
  margin-top: 10px;
  float: left;
  clear: both;
  margin-left: 50px;
}
.box1-1 div:nth-of-type(2) {
  text-align: center;
  padding: 20px 0;
}
.box1-1 div:nth-of-type(3) {
  text-align: center;
  padding: 0 0 20px 0;
}
.box1-1 div:nth-of-type(3) span {
  font-weight: 900;
  color: #fcaa3e;
  font-size: 23px;
}
.box1-1 div:nth-of-type(4) {
  float: left;
  margin-left: 28px;
  padding: 0 0 20px 0;
}
.box1-1 div:nth-of-type(4) span {
  color: #fcaa3e;
  font-size: 20px;
}
.box1-1 div:nth-of-type(5) {
  clear: both;
  float: left;
  padding: 10px 50px;
  background-color: #b6a4fe;
  color: #fff;
  border-radius: 9px;
  margin-left: 40px;
}
</style>