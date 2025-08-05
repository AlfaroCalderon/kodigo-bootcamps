import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getRusuarios } from '@/services/supabase.service'

export const Rusuario = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['usuarios'], 
    queryFn: getRusuarios,
    refetchInterval: 10000
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              <p className="text-lg text-gray-600 font-medium">Cargando usuarios...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-red-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Error al cargar los usuarios</h3>
              <p className="text-gray-600">Por favor, intenta nuevamente más tarde</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Reporte de Usuarios</h1>
          <p className="text-gray-600">Lista completa de usuarios registrados en el sistema</p>
        </div>

        {/* Stats Card */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Usuarios</p>
                <p className="text-3xl font-bold text-indigo-600">{data?.length || 0}</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Table Headers - Only visible on desktop */}
        <div className="hidden md:block mb-4">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg overflow-hidden">
            <div className="flex items-center p-4 text-white font-semibold">
              <div className="flex-1 min-w-0">
                <span className="text-sm uppercase tracking-wide">Usuario</span>
              </div>
              <div className="flex-1 min-w-0 px-4">
                <span className="text-sm uppercase tracking-wide">Email</span>
              </div>
              <div className="flex-1 min-w-0 px-4">
                <span className="text-sm uppercase tracking-wide">Fecha Registro</span>
              </div>
              <div className="px-4">
                <span className="text-sm uppercase tracking-wide">Último Acceso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Users List */}
        <div className="space-y-4">
          {data && data.map(usuario => (
            <div key={usuario.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                {/* Mobile Header */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{usuario.name} {usuario.lastname}</h2>
                      <p className="text-indigo-100 text-sm">Usuario #{usuario.id}</p>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-800 font-medium">{usuario.email}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Último acceso</p>
                        <span className="text-sm font-medium text-blue-600">
                          {usuario.last_sign_in_at ? new Date(usuario.last_sign_in_at).toLocaleDateString('es-ES') : 'Nunca'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Registrado</p>
                      <span className="text-sm text-gray-500">
                        {new Date(usuario.created_at).toLocaleDateString('es-ES')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop/Tablet Row Layout */}
              <div className="hidden md:block">
                <div className="flex items-center p-6 hover:bg-gray-50 transition-colors duration-200">
                  {/* Avatar & Name */}
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-gray-800 truncate">{usuario.name} {usuario.lastname}</h3>
                      <p className="text-sm text-gray-500">Usuario #{usuario.id}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-2 flex-1 min-w-0 px-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 truncate">{usuario.email}</span>
                  </div>

                  {/* Created Date */}
                  <div className="flex items-center space-x-2 flex-1 min-w-0 px-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 truncate">
                      {new Date(usuario.created_at).toLocaleDateString('es-ES', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* Last Sign In */}
                  <div className="flex items-center space-x-2 px-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                      {usuario.last_sign_in_at 
                        ? new Date(usuario.last_sign_in_at).toLocaleDateString('es-ES', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                          })
                        : 'Nunca'
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {data && data.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No hay usuarios registrados</h3>
              <p className="text-gray-600">Los usuarios aparecerán aquí una vez que se registren en el sistema</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
