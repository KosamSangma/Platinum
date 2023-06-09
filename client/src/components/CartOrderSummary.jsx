import { Button, Flex, Heading, Stack, Text, useColorModeValue as mode, Badge } from '@chakra-ui/react'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link as ReactLink, useNavigate } from 'react-router-dom'

const CartOrderSummary = () => {
  const [buttonLoading, setButtonLoading] = useState()
  const standardShipping = Number(50).toFixed(2)
  const cartItems = useSelector((state) => state.cart)
  const { subtotal } = cartItems
  const navigate = useNavigate()

  const checkoutHandler = () => {
    setButtonLoading(true)
    navigate('/checkout')
  }

  return (
    <Stack spacing='9' borderWidth='1px' rounded='lg' padding='10' w='full'>
      <Heading size='md'>Order Summary</Heading>
      <Stack spacing='6'>
        <Flex justify='space-between'>
          <Text fontWeight='medium' color={mode('gray.600', 'gray.400')}>
            Subtotal
          </Text>
          <Text fontWeight='medium'>Rs.{subtotal}</Text>
        </Flex>
        <Flex justify='space-between'>
          <Text fontWeight='medium' color={mode('gray.600', 'gray.400')}>
            Shipping
          </Text>
          <Text fontWeight='medium'>
            {subtotal <= 1000 ? (
              standardShipping
            ) : (
              <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='green'>
                Free
              </Badge>
            )}
          </Text>
        </Flex>
        <Flex justify='space-between'>
          <Text fontSize='l' fontWeight='semibold'>
            Total
          </Text>
          <Text fontSize='l' fontWeight='semibold'>
            ₹{subtotal <= 1000 ? Number(subtotal) + Number(standardShipping) : subtotal}
          </Text>
        </Flex>
      </Stack>
      <Button
        as={ReactLink}
        to='/checkout'
        colorScheme='green'
        size='lg'
        fontSize='md'
        rightIcon={<FaArrowRight />}
        isLoading={buttonLoading}
        onClick={() => checkoutHandler()}
      >
        Checkout
      </Button>
    </Stack>
  )
}

export default CartOrderSummary
