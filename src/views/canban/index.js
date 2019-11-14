const indexMixin = {
  data () {
    return {
      groupId: 0,
      groupName: 'add group',
      dialogVisible: false,
      operationTag: 'add',
      addGroupTag: 1,
      groupIndex: '',
      groupForm: {
        title: '新增分组',
        name: ''
      },
      list: [
        {
          groupId: '1',
          groupName: 'first group',
          title: 'first group',
          isCollapse: true,
          description: 'hello first',
          parameterList: [
            {
              parameterId: 'parameterId1',
              parameterName: 'parameterName1'
            },
            {
              parameterId: 'parameterId2',
              parameterName: 'parameterName2'
            },
            {
              parameterId: 'parameterId3',
              parameterName: 'parameterName3'
            },
            {
              parameterId: 'parameterId4',
              parameterName: 'parameterName4'
            }
          ]
        },
        {
          groupId: '2',
          groupName: 'second group',
          title: 'second group',
          isCollapse: false,
          description: 'hello second',
          parameterList: [
            {
              parameterId: 'parameterId12',
              parameterName: 'parameterName12'
            },
            {
              parameterId: 'parameterId22',
              parameterName: 'parameterName22'
            },
            {
              parameterId: 'parameterId32',
              parameterName: 'parameterName32'
            },
            {
              parameterId: 'parameterId42',
              parameterName: 'parameterName42'
            }
          ]
        },
        {
          groupId: '3',
          groupName: 'third group',
          title: 'third group',
          isCollapse: false,
          description: 'hello third',
          parameterList: [
            {
              parameterId: 'parameterId13',
              parameterName: 'parameterName13'
            },
            {
              parameterId: 'parameterId23',
              parameterName: 'parameterName23'
            },
            {
              parameterId: 'parameterId33',
              parameterName: 'parameterName33'
            },
            {
              parameterId: 'parameterId43',
              parameterName: 'parameterName43'
            }
          ]
        },
        {
          groupId: '4',
          groupName: 'fourth group',
          title: 'fourth group',
          name: 'fourth',
          description: 'hello fourth',
          parameterList: [
            {
              parameterId: 'parameterId14',
              parameterName: 'parameterName14'
            },
            {
              parameterId: 'parameterId24',
              parameterName: 'parameterName24'
            },
            {
              parameterId: 'parameterId34',
              parameterName: 'parameterName34'
            },
            {
              parameterId: 'parameterId44',
              parameterName: 'parameterName44'
            },
            {
              parameterId: 'parameterId54',
              parameterName: 'parameterName54'
            }
          ]
        }
      ],
      list2: [],
      list3: []
    }
  },
  methods: {
    addGroup (tag) {
      ;(this.operationTag = 'add'), (this.groupForm.title = '新增分组')
      this.groupForm.name = ''
      this.addGroupTag = tag
      this.dialogVisible = true
    },
    editGroup (tag, index) {
      this.operationTag = 'edit'
      this.groupForm.title = '编辑分组'
      //
      this.groupIndex = index
      this.addGroupTag = tag
      if (tag == 1) {
        this.groupForm.name = this.list2[index].groupName
      } else {
        this.groupForm.name = this.list3[index].groupName
      }
      this.dialogVisible = true
    },
    deleteGroup (tag, index) {
      if (tag === 1) {
        this.list2.splice(index, 1)
      } else {
        this.list3.splice(index, 1)
      }
    },
    handleClose () {
      this.dialogVisible = false
    },
    //
    saveGroup () {
      // debugger
      // 新增分组
      if (this.operationTag === 'add') {
        let group = {
          groupId: -1,
          groupName: this.groupForm.name,
          parameterList: []
        }
        if (this.addGroupTag == 1) {
          this.list2.push(group)
        } else {
          this.list3.push(group)
        }
      } else {
        // 编辑分组
        // 获取修改后的分组名称
        if (this.addGroupTag == 1) {
          this.list2[this.groupIndex]['groupName'] = this.groupForm.name
        } else {
          this.list3[this.groupIndex]['groupName'] = this.groupForm.name
        }
      }

      this.dialogVisible = false
    }
  }
}
export default indexMixin
