
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FC } from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ADD_FEATURED_1, UPDATE_FEATURED_1, UPDATE_FEATURED_2, ADD_FEATURED_2, UPDATE_FEATURED_3, ADD_FEATURED_3, ADD_FEATURED_4, UPDATE_FEATURED_4, UPDATE_FEATURED_5, ADD_FEATURED_5 } from '../../src/graphql/mutation/site.mutation';
import { Section0 } from "../../src/interfacesV2/siteV2";
import { graphQLClientS } from "../../src/swr/graphQLClient";
import { slug } from "../../src/utils/function";

interface FormData {
  id?: string;
  name: string;
  href?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  section_level_1?: string;
  featured?: any;
  items?: any;
}

interface Props {
  section: Section0
  url: string
}

export const FormFeatured: FC<Props> = ({ section, url }) => {
  const { replace, pathname, query, push } = useRouter()
  
  // console.log('query',query);
  // console.log(section);
  
  // let p = pathname.substring(1).split('/')
  // p.splice(-1, 1)
  // let url = p.join('/')
  // console.log(query);
  // console.log(url);

  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormData>({
    defaultValues: { ...section }
  })

  const onSubmit = async (form: FormData) => {
    let data: Section0 | null | any
    {query.featured5 && section.id
      ?
      (     
        data = {
          name: form.name,
          description: form.description,
          imageSrc: form.imageSrc,
          imageAlt: form.imageAlt,
          section_level_0: query.section0,
          section_level_1: query.section1,
          section_level_2: query.section2,
          section_level_3: query.section3,
          section_level_4: query.section4,
          section_level_5: query.featured5,
        },
        // console.log(data)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Featured Update',
          showConfirmButton: false,
          timer: 1500
        }),
        await graphQLClientS.request(UPDATE_FEATURED_5, { _id: query.id, input: data }),
        replace(`/${url}`)
      )
      :
      query.featured5
      ?
      (     
        data = {
          name: form.name,
          description: form.description,
          imageSrc: form.imageSrc,
          imageAlt: form.imageAlt,
          section_level_0: query.section0,
          section_level_1: query.section1,
          section_level_2: query.section2,
          section_level_3: query.section3,
          section_level_4: query.section4,
        },
        // console.log(data)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Featured Created',
          showConfirmButton: false,
          timer: 1500
        }),
        await graphQLClientS.request(ADD_FEATURED_5, { _id: query.id, input: data }),
        push(`/${url}`)
      )
      :
      query.featured4 && section.id
        ?
        (     
          data = {
            name: form.name,
            description: form.description,
            imageSrc: form.imageSrc,
            imageAlt: form.imageAlt,
            section_level_0: query.section0,
            section_level_1: query.section1,
            section_level_2: query.section2,
            section_level_3: query.section3,
            section_level_4: query.featured4,
          },
          // console.log(data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Featured Update',
            showConfirmButton: false,
            timer: 1500
          }),
          await graphQLClientS.request(UPDATE_FEATURED_4, { _id: query.id, input: data }),
          replace(`/${url}`)

        )
        :
        query.featured4
        ?
        (     
          data = {
            name: form.name,
            description: form.description,
            imageSrc: form.imageSrc,
            imageAlt: form.imageAlt,
            section_level_0: query.section0,
            section_level_1: query.section1,
            section_level_2: query.section2,
            section_level_3: query.section3,
          },
          // console.log(data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Featured Created',
            showConfirmButton: false,
            timer: 1500
          }),
          await graphQLClientS.request(ADD_FEATURED_4, { _id: query.id, input: data }),
          push(`/${url}`)
        )
        :
      query.featured3 && section.id
        ?
        (     
          data = {
            name: form.name,
            description: form.description,
            imageSrc: form.imageSrc,
            imageAlt: form.imageAlt,
            section_level_0: query.section0,
            section_level_1: query.section1,
            section_level_2: query.section2,
            section_level_3: query.featured3,
          },
          // console.log(data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Featured Update',
            showConfirmButton: false,
            timer: 1500
          }),
          await graphQLClientS.request(UPDATE_FEATURED_3, { _id: query.id, input: data }),
          replace(`/${url}`)

        )
        :
        query.featured3
        ?
        (     
          data = {
            name: form.name,
            description: form.description,
            imageSrc: form.imageSrc,
            imageAlt: form.imageAlt,
            section_level_0: query.section0,
            section_level_1: query.section1,
            section_level_2: query.section2,
          },
          // console.log(data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Featured Created',
            showConfirmButton: false,
            timer: 1500
          }),
          await graphQLClientS.request(ADD_FEATURED_3, { _id: query.id, input: data }),
          replace(`/${url}`)
        )
        :
      query.featured2 && section.id
        ?
        (     
          data = {
            name: form.name,
            description: form.description,
            imageSrc: form.imageSrc,
            imageAlt: form.imageAlt,
            section_level_0: query.section0,
            section_level_1: query.section1,
            section_level_2: query.featured2,
          },
          // console.log(data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Featured Update',
            showConfirmButton: false,
            timer: 1500
          }),
          await graphQLClientS.request(UPDATE_FEATURED_2, { _id: query.id, input: data }),
          replace(`/${url}`)

        )
        :
        query.featured2
        ?
        (     
          data = {
            name: form.name,
            description: form.description,
            imageSrc: form.imageSrc,
            imageAlt: form.imageAlt,
            section_level_0: query.section0,
            section_level_1: query.section1,
          },
          // console.log(data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Featured Created',
            showConfirmButton: false,
            timer: 1500
          }),
          await graphQLClientS.request(ADD_FEATURED_2, { _id: query.id, input: data }),
          replace(`/${url}`)
        )
        :
      query.featured1 && section.id
        ?
        (     
          data = {
            name: form.name,
            description: form.description,
            imageSrc: form.imageSrc,
            imageAlt: form.imageAlt,
            section_level_0: query.section0,
            section_level_1: query.featured1,
          },
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Featured Update',
            showConfirmButton: false,
            timer: 1500
          }),
          await graphQLClientS.request(UPDATE_FEATURED_1, { _id: query.id, input: data }),
          replace(`/${url}`)

        )
        :
        query.featured1
        ?
        (     
          data = {
            name: form.name,
            description: form.description,
            imageSrc: form.imageSrc,
            imageAlt: form.imageAlt,
            section_level_0: query.section0,
          },
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Featured Created',
            showConfirmButton: false,
            timer: 1500
          }),
          await graphQLClientS.request(ADD_FEATURED_1, { _id: query.id, input: data }),
          replace(`/${url}`)
        )
        :
        null
    }
  }

  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-3 lg:max-w-none">

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sm:shadow sm:rounded-md sm:overflow-hidden">
                <div className=" bg-white sm:p-6">

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6">
                    <div className="col-span-2">
                      <div>
                        <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700">
                          Nombre
                        </label>
                        <input
                          className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm text-xs md:text-sm  rounded-md p-1 border border-gray-300"
                          type={"text"}
                          {...register('name', {
                            onChange: (e) => { },
                            onBlur: (e) => { },
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                          })}
                        />
                        <div>
                          {errors.name && <span className="text-xs md:text-sm text-orange-500">{errors.name.message}</span>}
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
                        <label htmlFor="imageAlt" className="block text-xs md:text-sm font-medium text-gray-700">
                          Descripción de la Imagen
                        </label>
                        <div className="mt-1">
                          <textarea
                            rows={4}
                            className="shadow-sm focus:ring-orange-500 focus:border-orange-500 my-2 block w-full text-xs md:text-sm border border-gray-300 rounded-md p-1"
                            {...register('imageAlt', {
                              required: 'Este campo es requerido',
                              minLength: { value: 2, message: 'Mínimo 3 caracteres' }
                            })}
                          />
                        </div>
                        <div>
                          {errors.imageAlt && <span className="text-xs md:text-sm text-orange-500">{errors.imageAlt.message}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Imagen</label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex justify-center p-5 border-2 border-gray-300 border-dashed rounded-md">
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
                            <div className="flex flex-col text-xs md:text-sm text-gray-600">
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
                        <div className="flex items-center">
                          <div className=" rounded-lg overflow-hidden leading-none">
                            <Image
                              src={getValues('imageSrc')}
                              alt="image"
                              height={300}
                              width={300}
                              objectFit="cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white text-right mt-3">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs md:text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      {
                        section.id ? `Updated` : `Created`
                      }
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
