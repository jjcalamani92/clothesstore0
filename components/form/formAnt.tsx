import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Upload,

} from 'antd';
import { InboxOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Main } from '../component';
// import { ImageUploader } from '../ant/image';
const { Option } = Select;
const routes = [
  {
    value: 'ropa',
    label: 'Ropa',
    children: [
      {
        value: 'ropa-de-hombre',
        label: 'Ropa de Hombre',
        children: [
          {
            value: 'chamarras',
            label: 'Chamarras',
          },
        ],
      },
      {
        value: 'ropa-de-mujer',
        label: 'Ropa de Mujer',
        children: [
          {
            value: 'chamarras',
            label: 'Chamarras',
          },
        ],
      },
    ],
  },
  {
    value: 'accesorios',
    label: 'Accesorios',
    children: [
      {
        value: 'para-de-hombre',
        label: 'para de Hombre',
        children: [
          {
            value: 'relojes-de-hombre',
            label: 'relojes de hombre',
          },
        ],
      },
    ],
  },

];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};



const filter = (inputValue: string, path: any[]) =>
  path.some(
    (option) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );

export const FormAnt = () => {
  const [form] = Form.useForm();
  const [image, setImage] = useState()
  const [route, setRoute] = useState()
  console.log(route);

  const onChangeRoute = (value: any, selectedOptions: any) => {
    setRoute(selectedOptions.map((data: { label: string; }) => ({name: data.label})));
  };


  const onFinish = (values: any) => {
    console.log('Received values of form: ', {...values, image});
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState(['']);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net', '.app'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Main>

      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >

        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
              message: 'Please input your product name!',
            },
          ]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          name="routes"
          label="Ruta del Producto"
          rules={[
            {
              type: 'array',
              required: true,
              message: 'Please select your routes!',
            },
          ]}
        >
          <Cascader
            options={routes}
            onChange={onChangeRoute}
            placeholder="Selecciona la ruta"
            showSearch={{
              filter
            }}
            // onSearch={(value) => console.log(value)}
          />
        </Form.Item>


        <Form.Item
          name="description"
          label="Descripcion"
          rules={[
            {
              required: true,
              message: 'Please input description of product',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item label="Precio">
          <Form.Item name="price" noStyle >
            <InputNumber min={1} max={10} />
          </Form.Item>
          <span className="ant-form-text"> Bs</span>
        </Form.Item>

        <Form.Item label="Precio de Descuento">
          <Form.Item name="discountPrice" noStyle >
            <InputNumber min={1} max={10} />
          </Form.Item>
          <span className="ant-form-text"> Bs</span>
        </Form.Item>

        <Form.Item label="Inventario">
          <Form.Item name="inStock" noStyle >
            <InputNumber min={1} max={10} />
          </Form.Item>
          <span className="ant-form-text"> Unidades</span>
        </Form.Item>




        <Form.Item
          name="mark"
          label="Marca"
          rules={[
            {
              required: true,
              message: 'Please select mark!',
            },
          ]}
        >
          <Select placeholder="select your mark">
            <Option value="male">piccoletti</Option>
            <Option value="female">makita</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item name="sizes" label="Tallas">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value="X" style={{ lineHeight: '32px' }}>
                  X
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="XL" style={{ lineHeight: '32px' }} disabled>
                  XL
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="XLL" style={{ lineHeight: '32px' }}>
                  XLL
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="XS" style={{ lineHeight: '32px' }}>
                  XS
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="S" style={{ lineHeight: '32px' }}>
                  S
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="M" style={{ lineHeight: '32px' }}>
                  M
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name="radio-group" label="Promociones">
          <Radio.Group>
            <Radio value="a">descuentos marzo</Radio>
            <Radio value="b">descuentos abril</Radio>
            <Radio value="c">descuentos mayo</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item 
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          {/* <ImageUploader setImage={setImage}/> */}
        </Form.Item>
    
        

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Main>
  );
};
