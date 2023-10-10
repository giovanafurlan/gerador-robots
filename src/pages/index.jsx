import { useState } from 'react';
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  Textarea,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import { FaRobot } from 'react-icons/fa';
import { BsSlashLg } from "react-icons/bs";
import { BiCopy } from 'react-icons/bi';
import { MdHttp } from "react-icons/md";
import Script from 'next/script';
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';

const Style = styled.div`
.react-dual-listbox select{
  min-height: 300px;
}
input{
  border-radius: 6px;
}
`

const options = [
  {
    label: "Google",
    value: "Google",
  },
  {
    label: "Baidu",
    value: "Baidu",
  },
  {
    label: "Bing",
    value: "Bing",
  },
  {
    label: "Moz Bot",
    value: "MozBot",
  },
  {
    label: "WEBCEO",
    value: "WEBCEO",
  },
  {
    label: "SEM RUSH",
    value: "SemRush",
  },
  {
    label: "Yandex",
    value: "Yandex",
  },
  {
    label: "AddThis",
    value: "AddThis",
  },
  {
    label: "AhrefsBot",
    value: "AhrefsBot",
  },
  {
    label: "BDCbot",
    value: "BDCbot",
  },
  {
    label: "DirBuster",
    value: "DirBuster",
  },
  {
    label: "EveryoneSocial",
    value: "EveryoneSocial",
  },
  {
    label: "Exabot",
    value: "Exabot",
  },
  {
    label: "LinkpadBot",
    value: "LinkpadBot",
  },
  {
    label: "Slurp",
    value: "Slurp",
  },
  {
    label: "Spbot",
    value: "Spbot",
  },
  {
    label: "TwengaBot",
    value: "TwengaBot",
  },
  {
    label: "MJ12bot",
    value: "MJ12bot",
  },
];

export default function New() {

  const bg = useColorModeValue("cinzaClaro", "gray.800");
  const color = useColorModeValue("black", "white");

  const [path, setPath] = useState('');
  const [pathsArray, setPathsArray] = useState([]);

  const [sitemap, setSiteMap] = useState();
  const [blockeds, setBlockeds] = useState([]);
  const [results, setResults] = useState([]);

  const toast = useToast();

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (path != null) {
      const newPaths = path.split(",").map(item => item.trim());
      setPathsArray([...pathsArray, ...newPaths]);
      setBlockeds([...blockeds, []]);
      setPath("");
    } else {
      toast({
        title: 'camposObrigatorios',
        status: 'error',
        duration: 5000,
        position: "top",
        isClosable: true,
      })
    }
  };

  const handleDelete = (index) => {
    setPathsArray(pathsArray.filter((_, i) => i !== index));
    setBlockeds(blockeds.filter((_, i) => i !== index));
  };

  const handleDualListBoxChange = (index, newBlockedItems) => {
    setBlockeds((prevBlockeds) => {
      const newState = [...prevBlockeds];
      newState[index] = newBlockedItems;
      return newState;
    });
  };

  const handleResult = () => {

    if (sitemap != null) {
      const agentRules = {};

      pathsArray.forEach((path, index) => {
        const blockedList = blockeds[index] || []; // Certifique-se de que blockedList está definido

        options.forEach(option => {
          const agentName = option.label;
          if (blockedList.includes(option.value)) {
            agentRules[agentName] = agentRules[agentName] || [];
            agentRules[agentName].push(`Disallow: ${path}`);
          } else {
            agentRules[agentName] = agentRules[agentName] || [];
            agentRules[agentName].push(`Allow: ${path}`);
          }
        });
      });

      const finalResult = Object.entries(agentRules).map(([agent, rules]) => {
        return `User-agent: ${agent}\n${rules.join('\n')}`;
      });

      const result = finalResult.concat(" ", `User-agent: * \nAllow: / \n\nSitemap: ${sitemap}`);

      const textoFormatado = result.toString().replace(/,/g, ',\n').replaceAll(",", '');
      setResults(textoFormatado);

    } else {
      toast({
        title: 'camposObrigatorios',
        status: 'error',
        duration: 5000,
        position: "top",
        isClosable: true,
      })
    }
  };

  return (
    <Style>
      <Script src="https://kit.fontawesome.com/08df0b650e.js" crossOrigin="anonymous"></Script>
      <Container
        maxW={"6xl"}
        display={"flex"}
        flexDir={"column"}
        py={6}
        gap={6}>
        <form
          onSubmit={handleInputSubmit}>
          <FormControl isRequired>
            <FormLabel
              variant={"h6"}
              color={"cinza"}>
              Páginas
            </FormLabel>
            <Flex gap="2">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  h="full"
                  // eslint-disable-next-line react/no-children-prop
                  children={<BsSlashLg />} />
                <Input
                  type="text"
                  value={path}
                  onChange={(e) => setPath(e.target.value)}
                  placeholder="Páginas separadas por vírgula Ex: /sobre,/blog,/contato"
                  pl="35px!important"
                  bg={bg}
                  border={"none"} />
              </InputGroup>
              <Button type="submit">Adicionar</Button>
            </Flex>
          </FormControl>
        </form>
        <Grid templateColumns={{ lg: pathsArray.length >= 2 ? "repeat(2,1fr)" : "repeat(1,1fr)" }} gap="4">
          {pathsArray.map((path, index) => (
            <GridItem key={index}
              border="1px"
              borderColor={"#c9c9c9"}
              borderRadius={"6px"}
              display={"flex"}
              flexDir={"column"}
              gap="2"
              p="4">
              <Tag
                variant='outline'
                w="fit-content">
                <TagLabel color={color}>{index + 1}- {path}</TagLabel>
                <TagCloseButton onClick={() => handleDelete(index)} />
              </Tag>
              <Flex justifyContent="space-around" fontSize={"xs"} marginBottom={"-10px"}>
                <Text>
                  Permitir
                </Text>
                <Text>
                  Bloquear
                </Text>
              </Flex>
              <DualListBox
                key={index}
                options={options}
                canFilter={true}
                showOrderButtons={true}
                selected={blockeds[index]} // Usando a seleção do componente específico
                onChange={(newBlockedItems) => handleDualListBoxChange(index, newBlockedItems)}
              />
            </GridItem>
          ))}
        </Grid>
        <FormControl isRequired>
          <FormLabel
            variant={"h6"}
            color={"cinza"}>
            Sitemaps
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              h="full"
              // eslint-disable-next-line react/no-children-prop
              children={<MdHttp />}
            />
            <Input
              type="text"
              value={sitemap}
              onChange={(e) => setSiteMap(e.target.value)}
              placeholder="Sitemaps separados por vírgula Ex: https://www.webpeak.com.br/sitemap.xml/,https://www.webpeak.com.br/sitemap.xml2" pl="35px!important"
              bg={bg}
              border={"none"} />
          </InputGroup>
        </FormControl>
        <Button onClick={handleResult}>Gerar</Button>
        {/* <pre>
          <code>
            {results.map((rule, index) => (
              <div key={index}>{rule}</div>
            ))}
          </code>
        </pre> */}
        <FormControl>
          <FormLabel htmlFor="result" display="none"></FormLabel>
          <InputGroup>
            {/* eslint-disable-next-line react/no-children-prop */}
            <InputLeftElement pointerEvents="none" children={<FaRobot />} />
            <Textarea
              pos={"relative"}
              borderRadius={"5px"}
              px="35px!important"
              p="10px"
              rows={10}
              spellCheck="false"
              defaultValue={results}
            />
            <InputRightElement
              cursor={"pointer"}
              // eslint-disable-next-line react/no-children-prop
              children={
                <CopyToClipboard text={results}>
                  <BiCopy />
                </CopyToClipboard>
              }
            />
          </InputGroup>
        </FormControl>
      </Container>
    </Style>
  )
}
