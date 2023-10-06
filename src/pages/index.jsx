import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  List,
  ListItem,
  Text,
  Textarea,
  useToast
} from '@chakra-ui/react'
import { FaRobot } from 'react-icons/fa';
import { BiCopy } from 'react-icons/bi';
import Script from 'next/script';
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import CopyToClipboard from 'react-copy-to-clipboard';

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

  const [path, setPath] = useState('/');
  const [pathsArray, setPathsArray] = useState([]);

  const [sitemap, setSiteMap] = useState();
  const [blockeds, setBlockeds] = useState([]);
  const [results, setResults] = useState([]);

  const toast = useToast();

  /////////////////////

  const inputSubmit = (e) => {
    e.preventDefault();
    if (path.includes("/")) {
      setPathsArray([...pathsArray, path]);
      setBlockeds([...blockeds, []]);
      setPath("/");
    } else {
      toast({
        title: 'Add / in the beggining of the path',
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

  const generateResult = () => {
    const agentRules = {};

    pathsArray.forEach((path, index) => {
      const blockedList = blockeds[index];
      const allowedList = options.filter(option => !blockedList.includes(option.value));

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

    const result = finalResult.concat(" ", `Sitemap: ${sitemap}`);

    const textoFormatado = result.toString().replace(/,/g, ',\n').replaceAll(",", '');
    setResults(textoFormatado);

  };

  return (
    <>
      <Script src="https://kit.fontawesome.com/08df0b650e.js" crossOrigin="anonymous"></Script>
      <Container
        maxW={"6xl"}
        display={"flex"}
        flexDir={"column"}
        py={6}
        gap={6}>
        <form
          onSubmit={inputSubmit}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4
          }}>
          <FormLabel>Páginas</FormLabel>
          <Input type="text" value={path} onChange={(e) => setPath(e.target.value)} placeholder="Enter a path" />
          <Button type="submit">Adicionar</Button>
        </form>
        <List>
          {pathsArray.map((path, index) => (
            <Box key={index} py={2}>
              <ListItem py={2}>
                {index + 1}- {path}
                <Button onClick={() => handleDelete(index)}>Delete</Button>
              </ListItem>
              <Flex justifyContent="space-evenly" fontWeight={"bold"}>
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
                selected={blockeds[index]} // Usando a seleção do componente específico
                onChange={(newBlockedItems) => handleDualListBoxChange(index, newBlockedItems)}
              />
            </Box>
          ))}
        </List>
        <Input type="text" value={sitemap} onChange={(e) => setSiteMap(e.target.value)} placeholder="Sitemaps separados por vírgula" />
        <Button onClick={generateResult}>Gerar</Button>
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
    </>
  )
}
