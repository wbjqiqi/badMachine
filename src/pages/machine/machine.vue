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
    <badMachineDialog :getAllMachine="getAllMachine" :dialogTitle="dialogTitle" :machineForm="machineForm" :newMachineBox="newMachineBox" :updateMachine="updateMachine" @closeDialog="newMachineBox=false"></badMachineDialog>
    <div class="footer"></div>
  </div>
</template>

<script lang='ts'>
  import badMachineDialog from './newMachineDialog'
  import {mapGetters} from 'vuex'
  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component({
    components: {
      badMachineDialog
    },
    computed: mapGetters([
      'getUserInfo'
    ])
  })
  export default class mahine extends Vue {
//    data
    machineForm = {
      id: '',
      name: '',
      number: '',
      describe: '',
      reason: '',
      repairContent: '',
      breakoutTime: ''
    }
    updateMachine: boolean = false
    newMachineBox: boolean = false
    dialogTitle:string = ''

//    methods
    showNewClientBox (): void {
      this.dialogTitle = '新增坏机器'
      this.machineForm['name'] = ''
      this.machineForm['number'] = ''
      this.machineForm['describe'] = ''
      this.machineForm['reason'] = ''
      this.machineForm['repairContent'] = ''
      this.machineForm['breakoutTime'] = ''
      this.updateMachine = false
      this.newMachineBox = true
    }

    getAllMachine (): void {
      this.$store.dispatch('getAllMachine', {}).then((res) => {
        this['$message']({
          type: 'success',
          message: '获取成功'
        })
      }).catch(err => {
        this['$message']({
          type: 'error',
          message: '获取失败'
        })
        console.log(err)
      })
    }

    deleteBadMachine (row): void {
      this.$store.dispatch('deleteBadMachine', row).then((res) => {
        this.newMachineBox = false
        this['$message']({
          type: 'success',
          message: '删除成功'
        })
        this.getAllMachine()
      }).catch(err => {
        this['$message']({
          type: 'error',
          message: '删除失败'
        })
        console.log(err)
      })
    }

    editBadMachine (row): void {
      this.updateMachine = true
      this.dialogTitle = '编辑机器'
      this.machineForm.id = row.id ? row.id : ''
      this.machineForm.name = row.name ? row.name : ''
      this.machineForm.number = row.number ? row.number : ''
      this.machineForm.describe = row.describe ? row.describe : ''
      this.machineForm.reason = row.reason ? row.reason : ''
      this.machineForm.repairContent = row.repairContent ? row.repairContent : ''
      this.machineForm.breakoutTime = row.breakoutTime ? row.breakoutTime : ''
      this.newMachineBox = true
    }

    filterTag (value, row) {
      return row.name === value
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
