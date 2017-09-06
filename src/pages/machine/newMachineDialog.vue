<template>
  <el-dialog size="small" :title="dialogTitle" v-model="newMachineBox" validator="false" :beforeClose="closeDialog">
    <el-form @keyup.enter.native="newMachineSubmit()" labelPosition="left" :model="machineForm"
             ref="clientBox">
      <el-form-item label="机器名称" prop="name">
        <el-radio-group v-model="machineForm.name" v-for="label in getUserInfo.machineTypes">
          <el-radio :label=label.text  ></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="型号" prop="number">
        <el-input v-model="machineForm.number" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="describe">
        <el-input v-model="machineForm.describe" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="损坏原因" prop="reason">
        <el-input v-model="machineForm.reason" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="修复内容" prop="repairContent">
        <el-input v-model="machineForm.repairContent" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="损坏时间" prop="breakoutTime">
        <el-input v-model="machineForm.breakoutTime" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary"
                 @click=newMachineSubmit()>确 定
      </el-button>
    </div>
  </el-dialog>
</template>

<script lang='ts'>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {mapGetters} from 'vuex'
  @Component({
    props: ['machineForm', 'updateMachine', 'newMachineBox', 'dialogTitle', 'getAllMachine'],
    computed: mapGetters([
      'getUserInfo'
    ])
  })
  export default class machineDialog extends Vue {
//    data

//    methods
    newMachineSubmit (): void {
      if (this['updateMachine']) {
        let data = {
          id: this['machineForm'].id,
          name: this['machineForm'].name,
          number: this['machineForm'].number,
          describe: this['machineForm'].describe,
          reason: this['machineForm'].reason,
          repairContent: this['machineForm'].repairContent,
          breakoutTime: this['machineForm'].breakoutTime
        }
        this.$store.dispatch('updateBadMachine', data).then((res) => {
          this.closeDialog()
          this['$message']({
            type: 'success',
            message: '更新成功'
          })
          this['getAllMachine']()
        }).catch(err => {
          this['$message']({
            type: 'error',
            message: '更新失败'
          })
          console.log(err)
        })
      } else {
        let data = {
          name: this['machineForm'].name,
          number: this['machineForm'].number,
          describe: this['machineForm'].describe,
          reason: this['machineForm'].reason,
          repairContent: this['machineForm'].repairContent,
          breakoutTime: this['machineForm'].breakoutTime
        }
        this.$store.dispatch('newBadMachine', data).then((res) => {
          this.closeDialog()
          this['$message']({
            type: 'success',
            message: '添加成功'
          })
          this['getAllMachine']()
        }).catch(err => {
          this['$message']({
            type: 'error',
            message: '添加失败'
          })
          console.log(err)
        })
      }
    }

    closeDialog () {
      this.$emit('closeDialog')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
