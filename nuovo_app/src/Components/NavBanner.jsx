import {
    Box,
    CloseButton,
    Container,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { AiOutlineRight } from 'react-icons/ai';
  
  const NavBanner = () => {
    const isMobile = useBreakpointValue({
      base: true,
      md: false,
    })
    return (
      <Box
        as="section"
        pb={{
          base: '12',
          md: '24',
        }}
        
      >
        <Box bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container
            py={{
              base: '4',
              md: '2.5',
            }}
            position="relative"
          >
            <CloseButton
              display={{
                sm: 'none',
              }}
              position="absolute"
              right="2"
              top="2"
            />
            <Stack
              direction={{
                base: 'column',
                sm: 'row',
              }}
              justify="space-between"
              spacing={{
                base: '3',
                md: '2',
              }}
            >
              <Stack
                // spacing="4"
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                align={{
                  base: 'start',
                  md: 'center',
                }}
              >
               
                <Stack
                  direction={{
                    base: 'column',
                    md: 'row',
                  }}
                //   spacing={{
                //     base: '0.5',
                //     md: '1.5',
                //   }}
                //   pe={{
                //     base: '4',
                //     sm: '0',
                //   }}
                >
                  <Text fontWeight="medium">Winter Clothing | Shop Now <AiOutlineRight/></Text>
                  
                </Stack>
              </Stack>
              <Stack
                direction={{
                  base: 'column',
                  sm: 'row',
                }}
                spacing={{
                  base: '3',
                  sm: '2',
                }}
                align={{
                  base: 'stretch',
                  sm: 'center',
                }}
              >
                <CloseButton
                  display={{
                    base: 'none',
                    sm: 'inline-flex',
                  }}
                  justifyContent={'space-between'}
                />
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    )
  }

  export default NavBanner;