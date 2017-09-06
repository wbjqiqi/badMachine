<template>
  <div class="bimbox-container">
    <div class="nav">
    </div>
    <el-table stripe :data='getUserInfo.machines' style="width:100%;overflow-y: auto">
      <el-table-column prop='name' sortable
                       label="机器名称"
                       :filters="[{ text: '注塑机', value: '注塑机' }, { text: '机械手', value: '机械手' }]"
                       :filter-method="filterTag"
                       filter-placement="bottom-end">
        <template scope="scope">
          <el-tag
            :type="scope.row.name === '注塑机' ? 'primary' : 'success'"
            close-transition>{{scope.row.name}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop='number' sortable
                       label="型号"></el-table-column>
      <el-table-column prop='describe' sortable
                       label="描述"></el-table-column>
      <el-table-column prop='reason' sortable
                       label="损坏原因"></el-table-column>
      <el-table-column prop='repairContent' sortable
                       label="修复内容"></el-table-column>
      <el-table-column prop='breakoutTime' sortable
                       label="损坏时间"></el-table-column>
      <el-table-column label="编辑">
        <template scope="scope">
          <el-button type="primary" icon="edit" size="small" @click="editBadMachine(scope.row)">编辑</el-button>
          <el-button type="danger" icon="delete" size="small" @click="deleteBadMachine(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="width:100%">
      <el-button @click='showNewClientBox' type="primary"><i class="fa fa-plus"></i> 新增</el-button>
      <el-button @click='getAllMachine' type="info"><i class="fa fa-refresh"></i> 获取所有坏机器</el-button>
    </div>
    <el-dialog size="small" title="新增坏机器" v-model="newMachineBox" validator="false">
      <el-form @keyup.enter.native="newMachineSubmit()" labelPosition="left" :model="machineFrom"
               ref="clientBox">
        <el-form-item label="机器名称" prop="name">
          <el-radio-group v-model="machineFrom.name">
            <el-radio label="注塑机"></el-radio>
            <el-radio label="机械手"></el-radio>
          </el-radio-group>
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
          <el-input v-model="machineFrom.breakoutTime" auto-complete="off" ></el-input>
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
      return {
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
            repairContent: this.machineFrom.repairContent,
            breakoutTime: this.machineFrom.breakoutTime
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
            breakoutTime: this.machineFrom.breakoutTime
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
        this.machineFrom.breakoutTime = row.breakoutTime ? row.breakoutTime : ''
        this.newMachineBox = true
      },
      filterTag (value, row) {
        return row.name === value
      }

    },
    created: () => {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
