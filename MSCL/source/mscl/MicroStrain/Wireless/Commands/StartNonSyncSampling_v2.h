/*******************************************************************************
Copyright(c) 2015-2016 LORD Corporation. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
#pragma once

#include "mscl/MicroStrain/ByteStream.h"
#include "mscl/MicroStrain/ResponsePattern.h"

namespace mscl
{

#ifndef SWIG

    //Class: StartNonSyncSampling_v2
    //  Contains logic for the Start Non Sync Sampling (v2) Node command
    class StartNonSyncSampling_v2
    {
    private:
        StartNonSyncSampling_v2();                                          //disabled default constructor
        StartNonSyncSampling_v2(const StartNonSyncSampling_v2&);            //disabled copy constructor
        StartNonSyncSampling_v2& operator=(const StartNonSyncSampling_v2&); //disabled assignment operator

    public:
        //Function: buildCommand
        //    Builds the command packet
        //
        //Parameters:
        //    nodeAddress - the address of the Node to build the command for
        //
        //Returns:
        //    A <ByteStream> containing the command packet
        static ByteStream buildCommand(NodeAddress nodeAddress);

        //Class: Response
        //    Handles the response to the Start Sync Sampling Node command
        class Response : public ResponsePattern
        {
        public:
            //Constructor: Response
            //    Creates a StartSyncSampling Response object
            //
            //Parameters:
            //    nodeAddress - the node address to check for
            //    collector - The <ResponseCollector> used to register and unregister the response
            Response(NodeAddress nodeAddress, std::weak_ptr<ResponseCollector> collector);

        private:
            //Variable: m_nodeAddress
            //    The node address to look for in the response
            NodeAddress m_nodeAddress;

        public:
            //Function: match
            //    Checks if the <WirelessPacket> passed in matches the expected response pattern's bytes
            //
            //Parameters:
            //    packet - The <WirelessPacket> in which to try to find the pattern
            //
            //Returns:
            //    true if the packet matches a response pattern, false otherwise
            virtual bool match(const WirelessPacket& packet) override;
        };
    };

#endif

}