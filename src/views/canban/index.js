const indexMixin = {
  data() {
    return {
      groupId: 0,
      groupName: 'add group',
      dialogVisible: false,
      groupForm: {
        name: ''
      },
      list: [{
          groupId: '1',
          groupName: 'first group',
          title: 'first group',
          isCollapse: true,
          description: 'hello first',
          parameterList: [{
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
          parameterList: [{
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
          parameterList: [{
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
          parameterList: [{
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
      list2: [{
          groupId: '1',
          groupName: 'first group',
          title: 'first group',
          isCollapse: true,
          description: 'hello first',
          parameterList: [{
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
          parameterList: [{
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
          parameterList: [{
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
          parameterList: [{
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
      ]
    }
  },
  methods: {
    addGroup() {
      this.dialogVisible = true
    },
    editGroup() {
      this.dialogVisible = true
    },
    deleteGroup(index) {
      alert(123)
      this.list2.splice(index, 1)
    },
    handleClose() {
      this.dialogVisible = false
    },
    saveGroup() {
      this.groupId += 1;
      let group = {
        groupId: this.groupId,
        groupName: this.groupForm.name,
        parameterList: []
      }
      this.list2.push(group)
      this.dialogVisible = false
    }
  }
}
export default indexMixin
