
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FC } from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { CREATE_SITE, UPDATE_SITE } from "../../src/graphql/mutation/site.mutation";
import { ISite } from "../../src/interfaces";
import { graphQLClientS } from "../../src/swr/graphQLClient";
import { slug } from "../../src/utils/function";

interface FormData {
  title: string;
  domain: string;
  logo: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
  numberPhone: number;
  address: string;
  location: string;
  description: string;
  type: string;
  client: string;
}

interface Props {
  site: ISite
  url: string
}

export const FormSite: FC<Props> = ({ site, url }) => {

  
  const {replace, push} = useRouter()


  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormData>({
    defaultValues: { ...site.data, type:site.type, client: site.client}
  })


  const onSubmit = async (form: FormData) => {

    if (site._id) {
      // console.log('formulario',form)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sitio Actualizado',
        showConfirmButton: false,
        timer: 1500
      })
      await graphQLClientS.request(UPDATE_SITE, {_id: site._id, input: form })
      replace(`/${url}/${site._id}`)

    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sitio Creado',
        showConfirmButton: false,
        timer: 1500
      })
      await graphQLClientS.request(CREATE_SITE, { input: form })
      push(`/${url}`)
    }
  }

  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    console.log('hola');
    
    // if (!target.files || target.files.length === 0) {
    //   return;
    // }
    // try {
    //   for (const file of target.files) {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     const { data } = await axios.post(`${process.env.APIUP_URL}/api/upload/image`, formData)
    //     setValue('logo', (getValues('logo'), data.url), { shouldValidate: true })
    //   }
    // } catch (error) {
    //   console.log({ error })
    // }
  }

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-3 lg:max-w-none">
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sm:shadow sm:rounded-md sm:overflow-hidden">
                <div className="sm:p-6">

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6">
                    <div className="col-span-2">
                      <div>
                        <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700">
                          Nombre
                        </label>
                        <input
                          className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm text-xs md:text-sm  rounded-md p-1 border border-gray-300"
                          type={"text"}
                          {...register('title', {
                            onChange: (e) => { },
                            onBlur: (e) => { },
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                          })}
                        />
                        <div>
                          {errors.title && <span className="text-xs md:text-sm text-orange-500">{errors.title.message}</span>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-xs md:text-sm font-medium text-gray-700">
                          Dirección
                        </label>
                        <input
                          className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm text-xs md:text-sm rounded-md p-1 border border-gray-300"
                          type={"text"}
                          {...register('address', {
                            onChange: (e) => { },
                            onBlur: (e) => { },
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                          })}
                        />
                        <div>
                          {errors.address && <span className="text-xs md:text-sm text-orange-500">{errors.address.message}</span>}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap 0 lg:grid-cols-2 lg:gap-3">
                        <div className="">
                          <label htmlFor="domain" className="block text-xs md:text-sm font-medium text-gray-700">
                            Dominio
                          </label>
                          <input
                            className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm text-xs md:text-sm rounded-md p-1 border border-gray-300"
                            {...register('domain', {
                              required: 'Este campo es requerido',
                              minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                            })}
                          />
                          <div>
                            {errors.domain && <span className="text-xs md:text-sm text-orange-500">{errors.domain.message}</span>}
                          </div>
                        </div>
                        <div className="">
                          <label htmlFor="numberPhone" className="block text-xs md:text-sm font-medium text-gray-700">
                            Teléfono:
                          </label>
                          <input
                            className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm text-xs md:text-sm rounded-md p-1 border border-gray-300"
                            type='number'
                            {...register('numberPhone', {
                              required: 'Este campo es requerido',
                              minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                            })}
                          />
                          <div>
                            {errors.numberPhone && <span className="text-xs md:text-sm text-orange-500">{errors.numberPhone.message}</span>}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="description" className="block text-xs md:text-sm font-medium text-gray-700">
                          Descripción
                        </label>
                        <div className="mt-1">
                          <textarea
                            rows={4}
                            className="shadow-sm focus:ring-orange-500 focus:border-orange-500 my-2 block w-full text-xs md:text-sm border border-gray-300 rounded-md p-1"
                            {...register('description', {
                              required: 'Este campo es requerido',
                              minLength: { value: 2, message: 'Mínimo 3 caracteres' }
                            })}
                          />
                        </div>
                        <div>
                          {errors.description && <span className="text-xs md:text-sm text-orange-500">{errors.description.message}</span>}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="location" className="block text-xs md:text-sm font-medium text-gray-700">
                          Ubicación
                        </label>
                        <div className="mt-1">
                          <textarea
                            rows={4}
                            className="shadow-sm focus:ring-orange-500 focus:border-orange-500 my-2 block w-full text-xs md:text-sm border border-gray-300 rounded-md p-1"
                            {...register('location', {
                              required: 'Este campo es requerido',
                              minLength: { value: 2, message: 'Mínimo 3 caracteres' }
                            })}
                          />
                        </div>
                        <div>
                          {errors.location && <span className="text-xs md:text-sm text-orange-500">{errors.location.message}</span>}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="type" className="block text-xs md:text-sm font-medium text-gray-700">
                          Tipo
                        </label>
                        <input
                          className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm text-xs md:text-sm  rounded-md p-1 border border-gray-300"
                          type={"text"}
                          {...register('type', {
                            onChange: (e) => { },
                            onBlur: (e) => { },
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                          })}
                        />
                        <div>
                          {errors.type && <span className="text-xs md:text-sm text-orange-500">{errors.type.message}</span>}
                        </div>
                      </div>       
                      <div>
                        <label htmlFor="client" className="block text-xs md:text-sm font-medium text-gray-700">
                          Cliente
                        </label>
                        <input
                          className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm text-xs md:text-sm  rounded-md p-1 border border-gray-300"
                          type={"text"}
                          {...register('client', {
                            onChange: (e) => { },
                            onBlur: (e) => { },
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                          })}
                        />
                        <div>
                          {errors.client && <span className="text-xs md:text-sm text-orange-500">{errors.client.message}</span>}
                        </div>
                      </div>       
                    </div>

                    <div className="col-span-1">
                      <label className="block text-xs md:text-sm font-medium text-gray-700">Logo</label>
                      <div className="mt-1 flex justify-center p-5 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-xs md:text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-orange-500 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                            >
                              <span>Cargar un archivo</span>
                              <input id="file-upload" name="file-upload" accept="image/png, image/gif, image/jpeg, image/webp" type="file" className="sr-only" onChange={onFileSelected} />
                            </label>
                            <p className="pl-1">o arrastrar y soltar</p>
                          </div>
                          <p className="text-xs md:text-sm text-gray-500">PNG, JPG, GIF hasta 5MB</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2 mt-2 " >
                        <div className="rounded-lg overflow-hidden leading-none border-2 p-2">
                          {/* <Image
                            src={getValues('logo')}
                            alt="image"
                            height={200}
                            width={500}
                            objectFit="contain"
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white text-right mt-3">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs md:text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      { site._id  ? "Actualizar" : "Crear"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  )
}
