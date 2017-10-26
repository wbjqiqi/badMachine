<template>
  <el-dialog size="small" title="新建机器种类" v-model="newTypeBox" validator="false" :beforeClose="closeDialog">
    <el-form @keyup.enter.native="newTypeSubmit()" labelPosition="left" :model="machineTypeForm"
             ref="clientBox">
      <el-form-item label="名字" prop="breakoutTime">
        <el-input v-model="machineTypeForm.machineName" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <el-tag v-for="(key, index) in getUserInfo.machineTypes"
      :type="colorArray[index]" :key="key.text"
      close-transition>{{key.text}}
    </el-tag>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary"
                 @click=newTypeSubmit()>确 定
      </el-button>
    </div>
  </el-dialog>
</template>

<script lang='ts'>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {mapGetters} from 'vuex'
  @Component({
    props: ['newTypeBox', 'getAllMachine', 'colorArray'],
    computed: mapGetters([
      'getUserInfo'
    ])
  })
  export default class typeDialog extends Vue {
//    data
    machineTypeForm = {
      machineName: ''
    }
//    methods
    newTypeSubmit (): void {
      let data = {
        name: this['machineTypeForm'].machineName
      }
      this.$store.dispatch('newMachineType', data).then((res) => {
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
    }

    closeDialog () {
      this.$emit('closeTypeDialog')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-tag{
    margin:0 5px;
  }
</style>
