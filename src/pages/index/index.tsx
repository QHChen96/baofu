import { useCallback } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks'

import './index.scss'

const Index = () => {
  const env = useEnv()
  const [_, { setTitle }] = useNavigationBar({ title: 'Taro Hooks' })
  const [show] = useModal({
    title: 'Taro Hooks!',
    showCancel: false,
    confirmColor: '#8c2de9',
    confirmText: '支持一下',
    mask: true,
  })
  const [showToast] = useToast({ mask: true })

  const handleModal = useCallback(() => {
    show({ content: '不如给一个star⭐️!' }).then(() => {
      showToast({ title: '点击了支持!' })
    })
  }, [show, showToast])

  return <View className='wrapper'></View>
}

export default Index
