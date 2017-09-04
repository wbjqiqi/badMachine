<template>
  <div class="bimbox-container">
    <div class="nav">
    </div>
    <el-table :data='getUserInfo.machines' style="width:100%;">
      <el-table-column prop='name' label="机器名称"></el-table-column>
      <el-table-column prop='number' label="型号"></el-table-column>
      <el-table-column prop='describe' label="描述"></el-table-column>
      <el-table-column prop='reason' label="损坏原因"></el-table-column>
      <el-table-column prop='repairContent' label="修复内容"></el-table-column>
      <el-table-column prop='breakoutTime' label="损坏时间"></el-table-column>
      <el-table-column label="编辑">
        <template scope="scope">
          <el-button type="primary" icon="edit" size="small" @click="editBadMachine(scope.row)">编辑</el-button>
          <el-button type="danger" icon="delete" size="small" @click="deleteBadMachine(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="width:100%">
      <el-button @click='showNewClientBox' type="primary" >新增</el-button>
      <el-button @click='getAllMachine' type="info" >获取所有坏机器</el-button>
    </div>
    <el-dialog size="large" title="新增坏机器" v-model="newMachineBox" validator="false">
      <el-form @keyup.enter.native="" label-posit ion="top" :model="machineFrom"
               ref="clientBox">
        <el-form-item label="机器名称" prop="name">
          <el-input v-model="machineFrom.name" auto-complete="off" :autofocus="dialogProjectFormVisible"
                    ref="machineName"></el-input>
        </el-form-item>
        <el-form-item label="型号" prop="number">
          <el-input v-model="machineFrom.number" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="describe">
          <el-input v-model="machineFrom.describe" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="损坏原因" prop="reason">
          <el-input v-model="machineFrom.reason" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="修复内容" prop="repairContent">
          <el-input v-model="machineFrom.repairContent" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="损坏时间" prop="breakoutTime">
          <el-input v-model="machineFrom.breakoutTime" auto-complete="off" placeholder="请输入几小时以前损坏"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="newMachineBox = false">取 消</el-button>
        <el-button type="primary" :disabled="isProjectSaveFetching" :loading="isProjectSaveFetching"
                   @click=newMachineSubmit()>确 定
        </el-button>
      </div>
    </el-dialog>
    <div class="footer"></div>
  </div>
</template>

<script lang='ts'>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
//      const validName = (rule, value, callback) => {
//        if (value === '') {
//          callback(new Error('请输入项目名称'))
//        } else if (!(/^[a-zA-Z0-9_\u4e00-\u9fa5]{2,20}$/.test(value))) {
//          callback(new Error('请输入2~20之间的字母数字或下划线'))
//        } else {
//          callback()
//        }
//      }
      return {
//        machineFromRules: {
//          name: [{
//            validator: validName,
//            trigger: 'blur'
//          }],
//          number: [
//            {
//              required: false,
//              message: ''
//            },
//            {
//              type: 'string',
//              max: 10000,
//              min: 10,
//              message: '人数必须是10~10000之间的整数'
//            }
//          ],
//          max_storage_size: [
//            {
//              required: true,
//              message: '请输入整数'
//            },
//            {
//              type: 'number',
//              max: 2000,
//              min: 20,
//              message: '项目存储空间最少20G，最多2T'
//            }
//          ]
//        },
        machineFrom: {
          name: '',
          number: '',
          describe: '',
          reason: '',
          repairContent: '',
          breakoutTime: ''
        },
        updateMachine: false,
        newMachineBox: false,
        dialogProjectFormVisible: false,
        isProjectSaveFetching: false,
        updateMachineId: ''
      }
    },
    components: {},
    computed: mapGetters([
      'getUserInfo'
    ]),
    methods: {
      ...mapActions([]),
      showNewClientBox () {
        this.machineFrom.name = ''
        this.machineFrom.number = ''
        this.machineFrom.describe = ''
        this.machineFrom.reason = ''
        this.machineFrom.repairContent = ''
        this.machineFrom.breakoutTime = ''
        this.updateMachine = false
        this.newMachineBox = true
      },
      getAllMachine () {
        this.$store.dispatch('getAllMachine', {}).then((res) => {
          this.$message({
            type: 'success',
            message: '获取成功'
          })
        }).catch(err => {
          this.$message({
            type: 'error',
            message: '获取失败'
          })
          console.log(err)
        })
      },
      newMachineSubmit () {
        if (this.updateMachine) {
          let data = {
            id: this.updateMachineId,
            name: this.machineFrom.name,
            number: this.machineFrom.number,
            describe: this.machineFrom.describe,
            reason: this.machineFrom.reason,
            repairContent: this.machineFrom.repairContent
          }
          this.$store.dispatch('updateBadMachine', data).then((res) => {
            this.newMachineBox = false
            this.$message({
              type: 'success',
              message: '更新成功'
            })
            this.getAllMachine()
          }).catch(err => {
            this.$message({
              type: 'error',
              message: '更新失败'
            })
            console.log(err)
          })
        } else {
          let data = {
            name: this.machineFrom.name,
            number: this.machineFrom.number,
            describe: this.machineFrom.describe,
            reason: this.machineFrom.reason,
            repairContent: this.machineFrom.repairContent,
            breakoutTime: new Date().getTime() - this.machineFrom.breakoutTime * 3600000
          }
          this.$store.dispatch('newBadMachine', data).then((res) => {
            this.newMachineBox = false
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.getAllMachine()
          }).catch(err => {
            this.$message({
              type: 'error',
              message: '添加失败'
            })
            console.log(err)
          })
        }
      },
      deleteBadMachine (row) {
        this.$store.dispatch('deleteBadMachine', row).then((res) => {
          this.newMachineBox = false
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getAllMachine()
        }).catch(err => {
          this.$message({
            type: 'error',
            message: '删除失败'
          })
          console.log(err)
        })
      },
      editBadMachine (row) {
        this.updateMachine = true
        this.updateMachineId = row.id ? row.id : ''
        this.machineFrom.name = row.name ? row.name : ''
        this.machineFrom.number = row.number ? row.number : ''
        this.machineFrom.describe = row.describe ? row.describe : ''
        this.machineFrom.reason = row.reason ? row.reason : ''
        this.machineFrom.repairContent = row.repairContent ? row.repairContent : ''
        this.machineFrom.breakoutTime = '此项不可修改'
        this.newMachineBox = true
      }
    },
    created: () => {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
