NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/WriteEeprom_v2.h",{1295:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1295\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WriteEeprom_v2</div></div></div><div class=\"TTSummary\">Contains logic for the WriteEeprom (version 2) Node command</div></div>",1297:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1297\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">valueToWrite</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the WriteEeprom_v2 command packet</div></div>",1301:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1301\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the WriteEeprom_v2 Node command</div></div>",1303:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1303\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">valueWritten,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WriteEeprom_v2 Response object</div></div>",1305:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1305\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the WriteEeprom_v2 response</div></div>",1306:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1306\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_eepromAddress</div><div class=\"TTSummary\">The eeprom address to look for in the WriteEeprom_v2 response.</div></div>",1307:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1307\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_eepromValue</div><div class=\"TTSummary\">The eeprom value to look for in the WriteEeprom_v2 response.</div></div>",1308:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1308\" class=\"NDPrototype NoParameterForm\">WirelessPacket::ResponseErrorCode m_errorCode</div><div class=\"TTSummary\">The WirelessPacket::ResponseErrorCode from the response.</div></div>",1310:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1310\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes</div></div>",1311:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1311\" class=\"NDPrototype NoParameterForm\">WirelessPacket::ResponseErrorCode errorCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessPacket::ResponseErrorCode from the response packet.</div></div>",1312:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1312\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the success response.</div></div>",1313:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1313\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchFailResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the failure response.</div></div>"});